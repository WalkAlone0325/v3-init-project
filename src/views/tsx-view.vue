<script lang="tsx">
export default defineComponent({
  name: 'TsxView',
  setup() {
    const $style = useCssModule()

    const count = $ref(2)
    const doubleCount = $computed(() => count * 2)

    onMounted(() => {
      console.log('count:', count, 'doubleCount:', doubleCount);
    })

    return () => (
      <div>
        <h1>Test Tsx</h1>
        <h3>{count}</h3>
        <h3>{doubleCount}</h3>
        <div class={$style.box}></div>
        <div class="box2"></div>
      </div >
    )
  }
})
</script>

<style scoped module>
.box {
  width: 100px;
  height: 100px;
  background-color: #55ba83;
}
</style>

<style scoped>
.box2 {
  width: 100px;
  height: 100px;
  background-color: blue;
}
</style>