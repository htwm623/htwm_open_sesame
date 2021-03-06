let rule = [
  {
    type:'row',
    children:[
      {
        type:'i-col',
        props:{
          span:12
        },
        children:[
          formCreate.maker.input('商品名称','goods_name','iphone'),
          formCreate.maker.number('商品加个','goods_price',8688)
        ]
      },
      {
        type:'i-col',
        props:{
          span:12
        },
        children:[
          formCreate.maker.dateTime('创建时间','create_at'),
          formCreate.maker.radio('是否显示','is_show').options([
            {value:1,label:'显示'},
            {value:0,label:'不显示'}
          ])
        ]
      }
    ]
  }
]