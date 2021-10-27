// pages/mall/mall.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    vertical: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    swiperList:[{
      imgUrl:'https://z3.ax1x.com/2021/10/21/5yFY80.png'
    },{
    imgUrl:'https://z3.ax1x.com/2021/10/21/5yF85n.png'
  },
  {
    imgUrl:'https://z3.ax1x.com/2021/10/21/5yFJCq.png'
  },]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(){
let self=this;
wx.request({
  url: 'https://www.fastmock.site/mock/3c135eb954b46450e69a3cc7198a7a6b/houseRent/mall',
  success(res){
    // console.log(res);
    console.log(res.data)
    // console.log(res.data.commonUse.data)
    const commonUseList=res.data.commonUse.data;
    const hotSinglesList=res.data.hotSingles.data;
    const commonUse=res.data.commonUse;
    const hotSingles=res.data.hotSingles;
    self.setData({hotSingles});
    self.setData({commonUse});
    self.setData({commonUseList});
    self.setData({hotSinglesList});




  }
})
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