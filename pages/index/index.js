// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    inputShowed: false,
    inputVal: "",
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
  },],
  hot:[],
  searchList:null
  },

  onLoad() {
    let self=this;
    wx.request({
      url: 'https://www.fastmock.site/mock/3c135eb954b46450e69a3cc7198a7a6b/houseRent/index',
      success(res){
        // console.log(res.data.data[0].address_message);
        const hot=res.data.data;
        // console.log(hot);
        self.setData({hot});
        // console.log(self.setData({hot}))
      }
    })
  },
  // 自定义搜素结果
selectResult: function (e) {
  const value=e.detail.value;
  console.log(value);
  // console.log(this.data.hot);
  // console.log('select result', e.detail)
  if(value){
    var searchList=this.data.hot.filter
    (item=>item.address_message.indexOf(value)>-1)
    console.log(searchList)
  }
  this.setData({searchList})
},
})
