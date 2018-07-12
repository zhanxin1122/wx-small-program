Page({

  /**
   * 页面的初始数据
   */
  data: {
    headImg: '',
    name: '',
    list0: [{
      img: '../../images/me/dfk.png',
      text: '待付款'
    }, {
      img: '../../images/me/dsh.png',
      text: '待收货'
    }, {
      img: '../../images/me/dpj.png',
      text: '待评价'
    }, {
      img: '../../images/me/tk.png',
      text: '退款/售后'
    }, {
      img: '../../images/me/dd.png',
      text: '全部订单'
    }],
    list1: [{
      img: '../../images/me/message.png',
      text: '我的消息'
    }, {
      img: '../../images/me/yhj.png',
      text: '我的优惠券'
    }, {
      img: '../../images/me/atten.png',
      text: '我的收藏'
    }, {
      img: '../../images/me/addr.png',
      text: '地址管理',
      url: '/pages/me/addr-manage/index'
    }],
    list2: [{
      img: '../../../images/me/foot.png',
      text: '我的足迹'
    }, {
      img: '../../../images/me/kf.png',
      text: '官方客服'
    }, {
      img: '../../../images/me/sjrz.png',
      text: '商家入驻'
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
    wx.getUserInfo({
      success: ({ userInfo }) => {
        this.setData({
          name: userInfo.nickName,
          headImg: userInfo.avatarUrl
        })
      },
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
    
  }
})