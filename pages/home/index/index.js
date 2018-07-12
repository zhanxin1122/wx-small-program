Page({

  /**
   * 页面的初始数据
   */
  data: {
    showLoading: false,
    curIdx: 0,
    navData:[{
      name: '首页',
      value: '1'
    },{
      name: '坚果',
      value: '2'
    },{
      name: '水果',
      value: '3'
    },{
      name: '特产',
      value: '4'
    }, {
      name: '首页',
      value: '1'
    }, {
      name: '坚果',
      value: '2'
    }, {
      name: '水果',
      value: '3'
    }, {
      name: '特产',
      value: '4'
    }],
    goodsList: [{
      img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      desc: '【土八鲜迎2018】年货坚果礼盒零食大礼包特产干果炒货独立包装，哈哈哈哈啊哈哈哈！！'
    },{
      img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      desc: '【土八鲜迎2018】年货坚果礼盒零食大礼包特产干果炒货独立包装，哈哈哈哈啊哈哈哈！！'
    },{
      img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      desc: '【土八鲜迎2018】年货坚果礼盒零食大礼包特产干果炒货独立包装，哈哈哈哈啊哈哈哈！！'
    },{
      img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      desc: '【土八鲜迎2018】年货坚果礼盒零食大礼包特产干果炒货独立包装，哈哈哈哈啊哈哈哈！！'
    }],
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady(){
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
    setTimeout(() => {
      wx.stopPullDownRefresh();
    }, 100)
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
    
  },
  switchNav(e){
    this.setData({
      curIdx: e.target.id
    })
  }
})