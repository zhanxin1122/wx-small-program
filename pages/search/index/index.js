Page({

  /**
   * 页面的初始数据
   */
  data: {
    curIdx: 0,
    navList: [{
      text: '水果',
      img: '../../../images/search/shuiguo.png',
      selectedImg: '../../../images/search/shuiguo_r.png',
    }, {
      text: '坚果',
      img: '../../../images/search/jianguo.png',
      selectedImg: '../../../images/search/jianguo_r.png',
    }, {
      text: '特产',
      img: '../../../images/search/techan.png',
      selectedImg: '../../../images/search/techan_r.png',
    }, {
      text: '水果',
      img: '../../../images/search/shuiguo.png',
      selectedImg: '../../../images/search/shuiguo_r.png',
    }, {
      text: '坚果',
      img: '../../../images/search/jianguo.png',
      selectedImg: '../../../images/search/jianguo_r.png',
    }, {
      text: '特产',
      img: '../../../images/search/techan.png',
      selectedImg: '../../../images/search/techan_r.png',
    }, {
      text: '水果',
      img: '../../../images/search/shuiguo.png',
      selectedImg: '../../../images/search/shuiguo_r.png',
    }, {
      text: '坚果',
      img: '../../../images/search/jianguo.png',
      selectedImg: '../../../images/search/jianguo_r.png',
    }, {
      text: '特产',
      img: '../../../images/search/techan.png',
      selectedImg: '../../../images/search/techan_r.png',
    }, {
      text: '水果',
      img: '../../../images/search/shuiguo.png',
      selectedImg: '../../../images/search/shuiguo_r.png',
    }, {
      text: '坚果',
      img: '../../../images/search/jianguo.png',
      selectedImg: '../../../images/search/jianguo_r.png',
    }, {
      text: '特产',
      img: '../../../images/search/techan.png',
      selectedImg: '../../../images/search/techan_r.png',
    }],
    curList: {
      title: '水果',
      list: [{
        text: '热带水果',
        img: '../../images/test3.jpg'
      },{
        text: '热带水果',
        img: '../../images/test3.jpg'
        },{
          text: '热带水果',
          img: '../../images/test3.jpg'
      }, {
        text: '热带水果',
        img: '../../images/test3.jpg'
      }, {
        text: '热带水果',
        img: '../../images/test3.jpg'
      }, {
        text: '热带水果',
        img: '../../images/test3.jpg'
      }, {
        text: '热带水果',
        img: '../../images/test3.jpg'
      }, {
        text: '热带水果',
        img: '../../images/test3.jpg'
      }, {
        text: '热带水果',
        img: '../../images/test3.jpg'
      }, {
        text: '热带水果',
        img: '../../images/test3.jpg'
      }, {
        text: '热带水果',
        img: '../../images/test3.jpg'
      }, {
        text: '热带水果',
        img: '../../images/test3.jpg'
      }]
    },
    goodFoods: {
      title: '美食',
      list: [{
        text: '热带水果',
        img: '../../images/test3.jpg'
      }, {
        text: '热带水果',
        img: '../../images/test3.jpg'
      }, {
        text: '热带水果',
        img: '../../images/test3.jpg'
      }, {
        text: '热带水果',
        img: '../../images/test3.jpg'
      }, {
        text: '热带水果',
        img: '../../images/test3.jpg'
      }, {
        text: '热带水果',
        img: '../../images/test3.jpg'
      }, {
        text: '热带水果',
        img: '../../images/test3.jpg'
      }, {
        text: '热带水果',
        img: '../../images/test3.jpg'
      }, {
        text: '热带水果',
        img: '../../images/test3.jpg'
      }]
    }
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
    
  },
  /**
   * 切换分类
   */
  switchNav(e){
    this.setData({
      curIdx: e.target.dataset.index
    })
  }
})