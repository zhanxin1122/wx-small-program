Page({

  /**
   * 页面的初始数据
   */
  data: {
    allSelected: false,
    //购物车商品数量
    //购物车列表
    shopList: [{
      img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      desc: 'TC蔓越莓曲奇饼干手提兔子铁礼盒手工休闲零食品儿童女友送礼物哦哦哦哦哦哦哦',
      price: '8.8',
      weight: '0.16kg',
      num: 2,
      selected: false
    }, {
      img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      desc: 'TC蔓越莓曲奇饼干手提兔子铁礼盒手工休闲零食品儿童女友送礼物哦哦哦哦哦哦哦',
      price: '18.8',
      weight: '0.25kg',
      num: 1,
      selected: false
    }],
    // shopList: [],
    goodsList: [{
      img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      desc: '【土八鲜迎2018】年货坚果礼盒零食大礼包特产干果炒货独立包装，哈哈哈哈啊哈哈哈！！'
    }, {
      img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      desc: '【土八鲜迎2018】年货坚果礼盒零食大礼包特产干果炒货独立包装，哈哈哈哈啊哈哈哈！！'
    }, {
      img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      desc: '【土八鲜迎2018】年货坚果礼盒零食大礼包特产干果炒货独立包装，哈哈哈哈啊哈哈哈！！'
    }, {
      img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      desc: '【土八鲜迎2018】年货坚果礼盒零食大礼包特产干果炒货独立包装，哈哈哈哈啊哈哈哈！！'
    }],
    showLoading: false,
    sum: 0
  },
  //选中所有
  switchAll() {
    const { allSelected } = this.data
    this.setData({
      'allSelected': !allSelected
    })
    for (let i = 0; i < this.data.shopList.length; i++){
      let param = {}
      const str = `shopList[${i}].selected`
      param[str] = this.data.allSelected
      this.setData(param)
    }
    this.updateSum()
  },
  //选择商品
  selectGoods(e){
    const idx = e.target.dataset.index
    let param = {}
    const str = `shopList[${idx}].selected`
    param[str] = !this.data.shopList[idx].selected
    this.setData(param)
    this.updateSum()
  },
  /**
   * 减少物品数量
   */
  subNum: function (e) {
    const idx = e.target.dataset.index
    let param = {}
    const str = `shopList[${idx}].num`
    let cur = this.data.shopList[idx]
    let num = Number(cur.num)
    if (num > 1) {
      param[str] = cur.num - 1
      this.setData(param)
      this.updateSum()
    }
  },
  /**
   * 增加物品数量
   */
  addNum: function (e) {
    const idx = e.target.dataset.index
    let param = {}
    const str = `shopList[${idx}].num`
    let cur = this.data.shopList[idx]
    let num = Number(cur.num)
    param[str] = cur.num + 1
    this.setData(param)
    this.updateSum()
  },
  //输入物品数量
  inputNum: function(e) {
    const idx = e.target.dataset.index
    let param = {}
    const str = `shopList[${idx}].num`
    param[str] = e.detail.value
    this.setData(param)
    this.updateSum()
  },
  //更新总结额
  updateSum: function() {
    const list = this.data.shopList
    let sum = 0
    for (let i = 0;i < list.length;i++) {
      const item = list[i]
      if (item.selected) {
        sum += item.price * item.num
      }
    }
    this.setData({
      'sum': sum.toFixed(2)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      showLoading: true
    })
    setTimeout(() => {
      this.setData({
        showLoading: false
      })
    }, 1000)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})