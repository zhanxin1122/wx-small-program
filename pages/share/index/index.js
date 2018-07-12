Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperH: 0,
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    curIdx: 0,
    current: 0,
    navList: ['官方', '吃货达人', '关注'],
    officialList: [{
      head: '../../images/test3.jpg',
      name: '土八鲜官方旗舰店',
      time: '2018-01-01',
      title: '土八鲜捷报：双十一赣南脐橙突破12万箱突破12万箱',
      desc: '土八鲜捷报：双十一赣南脐橙突破12万箱土八鲜捷报：双十一赣南脐橙突破12万箱',
      img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    },{
      head: '../../images/test3.jpg',
      name: '土八鲜官方旗舰店',
      time: '2018-01-01',
      title: '土八鲜捷报：双十一赣南脐橙突破12万箱',
      desc: '土八鲜捷报：双十一赣南脐橙突破12万箱土八鲜捷报：双十一赣南脐橙突破12万箱',
      img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    }],
    peopleList: [{
      head: '../../images/test3.jpg',
      name: '土八鲜官方旗舰店',
      time: '2018-01-01',
      desc: '土八鲜捷报：双十一赣南脐橙突破12万箱土八鲜捷报：双十一赣南脐橙突破12万箱',
      img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    }, {
      head: '../../images/test3.jpg',
      name: '土八鲜官方旗舰店',
      time: '2018-01-01',
      desc: '土八鲜捷报：双十一赣南脐橙突破12万箱土八鲜捷报：双十一赣南脐橙突破12万箱',
      img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    }],
    attentionList: [{
      head: '../../images/test3.jpg',
      name: '土八鲜官方旗舰店',
      desc: '土八鲜捷报：双十一赣南脐橙突破12万箱土八鲜捷报：双十一赣南脐橙突破12万箱',
      video: '../../images/test.mp4'
    },{
      head: '../../images/test3.jpg',
      name: '土八鲜官方旗舰店',
      title0: '土八鲜捷报：双十一赣南脐橙突破12万箱',
      desc: '土八鲜捷报：双十一赣南脐橙突破12万箱土八鲜捷报：双十一赣南脐橙突破12万箱',
    }]
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
    wx.getSystemInfo({
      success: res => {
        console.log(res)
        this.setData({
          swiperH: 700
        })
      }
    })
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
    
  },
  /**
   * 切换导航栏
   */
  switchNav(e) {
    this.setData({
      curIdx: e.target.dataset.index,
      current: e.target.dataset.index
    })
  },
  /**
   * 切换内容页
   */
  switchCon(e){
    this.setData({
      curIdx: e.detail.current
    })
  }
})