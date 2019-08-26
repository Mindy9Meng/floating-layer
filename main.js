$(clickMe).on('click', function(e) {
  
  $(popover).show()
  console.log('show')
  setTimeout(function() {
    console.log('添加 one click')
    $(document).one('click', function() {
      console.log('我觉得这里不会执行')
      console.log('hide')
      $(popover).hide()
    })
  }, 0)

})

$(wrapper).on('click', function(e){
  e.stopPropagation()
})
