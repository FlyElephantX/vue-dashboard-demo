<template>
 <div>
    <el-tag v-for="(tag, index) in tags" :key="tag.index" closable
      @close="closeTag(index)" :type="tag.tabType"
      @click="activeTag(tag.index)">
      {{tag.title}}
    </el-tag>
 </div>
</template>

<script>
export default {
  name: "TopNav",
  watch: {
    '$route'(to, from) {
      console.log('to信息:' + to)
      console.log("from信息:" + from);
      this.addTagView(to)
    }
  },
  computed: {
    tags() {
      return this.$store.state.navTags.map((item) => {
        return {
          index: item.index,
          title: item.title,
          tabType: item.active ? 'success' : 'info',
          active: item.active
        }
      })
    }
  },
  methods: {
    addTagView(view) {
      if (view.meta.type ==  'menu') {
        this.$store.dispatch('addNavTag', view)
      }
    },
    closeTag(index) {
      let tagId = this.tags[index].index
      if (this.tags[index].active) {
        if (this.tags[index + 1]) {
          this.activeTag(this.tags[index + 1].index)
        } else if (this.tags[index - 1]) {
          this.activeTag(this.tags[index - 1].index)
        } else {
          this.$router.push('/home')
        }
      }
      this.$store.dispatch('removeNavTag', {
        index: tagId
      })
    },
    activeTag(tag) {
      this.$router.push(tag)
    }
  },
  mounted() {
    this.addTagView(this.$route)
  }
}
</script>

<style scoped>



</style>