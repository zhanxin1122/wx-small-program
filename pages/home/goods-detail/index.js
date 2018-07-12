Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图片
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    //评价列表
    pjList: [{
      head: '/images/test3.jpg',
      name: '姐姐2312',
      grade: 4,
      desc: '味道不错，价格实惠，送货快，喜欢京东购物，一路走来，买到了钻石会员，不容易啊',
      gg: '70-85mm 10斤装',
      list: [{
        type: 'video',
        url: ''
      },{
        type: 'img',
        url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
      },{
        type: 'img',
        url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
      }]}, {
        head: '/images/test3.jpg',
        name: '姐姐2312',
        grade: 3,
        desc: '味道不错，价格实惠，送货快，喜欢京东购物，一路走来，买到了钻石会员，不容易啊',
        gg: '70-85mm 10斤装',
        list: [{
          type: 'video',
          url: ''
        }, {
          type: 'img',
          url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
        }, {
          type: 'img',
          url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
        }]
    }],
    //店铺推荐列表
    dptjList: [{
      img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      desc: '新货无漂白偏黄色-开心果500g，原味好吃的不得了哦哦哦哦哦哦哦哦',
      price: '15.8'
    }, {
      img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      desc: '新货无漂白偏黄色-开心果500g，原味好吃的不得了哦哦哦哦哦哦哦哦',
      price: '14.8'
    }, {
      img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      desc: '新货无漂白偏黄色-开心果500g，原味好吃的不得了哦哦哦哦哦哦哦哦',
      price: '13.8'
    }],
    spxqList: [{
      img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      url: '/pages/home/index/index'
    }, {
      img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      url: '/pages/home/index/index'
    }, {
      img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      url: '/pages/home/index/index'
    }],
    ggFlag: true,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    ggArr: ['70-85mm 10斤装', '90-100mm 20斤装'],
    ggIdx: 0,
    ggNum: 1,
    goodsNum: 2
  },
  /**
   * 选择规格
   */
  switchGg: function(e){
    this.setData({
      ggIdx: e.target.dataset.index
    })
  },
  /**
   * 选择规格
   */
  switchGgShow: function(){
    this.setData({
      ggFlag: !this.data.ggFlag
    })
  },
  /**
   * 减少物品数量
   */
  subNum: function () {
    let num = Number(this.data.ggNum)
    if(num > 1){
      this.setData({
        ggNum: num - 1
      })
    }
  },
  /**
   * 增加物品数量
   */
  addNum: function (e) {
    let num = Number(this.data.ggNum)
    this.setData({
      ggNum: num + 1
    })
  },
  /**
   * 监听数量输入
   */
  inputNum: function(e){
    this.setData({
      ggNum: e.detail.value
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})