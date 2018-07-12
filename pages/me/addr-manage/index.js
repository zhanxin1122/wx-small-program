// pages/me/addr-manage/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list:[{
      name: '李逵',
      mobile: '13838382355',
      region: ['广东省', '深圳市', '南山区'],
      addr: '江西省 赣州市 瑞金市 光棍村 气力段 阳关冰棺 阳光汽车劳斯莱斯服务部',
      default: false
    }, {
      name: '张飞',
      mobile: '13838382315',
      region: ['广东省', '深圳市', '南山区'],
      addr: '江西省 赣州市 瑞金市 光棍村 气力段 阳关冰棺 阳光汽车劳斯莱斯服务部',
      default: true
    }],
    isShowAddr: false,
    name: '',
    mobile: '',
    addr: '',
    region: ['广东省', '深圳市', '南山区']
  },
  //新建地址
  newAddr: function() {
    this.setData({
      isShowAddr: true,
      name: '',
      mobile: '',
      addr: '',
      region: ['广东省', '深圳市', '南山区']
    })
  },
  //输入姓名
  inputName: function(e){
    this.setData({
      name: e.detail.value
    })
  },
  //输入手机号码
  inputMobile: function(e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  //改变地址
  bindRegionChange: function(e){
    this.setData({
      region: e.detail.value
    })
  },
  //输入详细地址
  inputAddr: function(e) {
    this.setData({
      addr: e.detail.value
    })
  },
  //保存或修改收货地址
  updateShdz: function() {
    if (this.validInfo()) {
      //提交数据
      this.setData({
        isShowAddr: false
      })
    }
  },
  validInfo: function() {
    const { name, mobile, addr } = this.data
    if(!name) {
      wx.showToast({
        title: '请输入联系人',
        icon: 'none',
        duration: 1000
      })
      return false
    }
    if (!mobile) {
      wx.showToast({
        title: '请输入手机号码',
        icon: 'none',
        duration: 1000
      })
      return false
    }
    if (!addr) {
      wx.showToast({
        title: '请输入详细地址',
        icon: 'none',
        duration: 1000
      })
      return false
    }
    return true
  },
  //设置默认地址
  setDefault: function(e){
    let idx = e.target.dataset.idx
    this.setData({
      list: this.data.list.map((item, i) => {
        item.default = idx == i
        return item
      })
    })
  },
  //删除地址
  delete: function(e){
    let idx = e.target.dataset.idx
  },
  //编辑地址
  edit: function(e){
    const cur = this.data.list[e.target.dataset.idx]
    this.setData({
      isShowAddr: true,
      name: cur.name,
      mobile: cur.mobile,
      addr: cur.addr,
      region: cur.region
    })
  },
  closeShade: function() {
    this.setData({
      isShowAddr: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //初始化区域选择器

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