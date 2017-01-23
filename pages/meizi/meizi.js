//index.js

Page({
    data: {
        btnText: "bt1",
        isShow: false,
        news: [],
    },

    onLoad: function (options) {
        // 生命周期函数--监听页面加载
        var that = this

        wx.request({
            url: "https://gank.io/api/data/%E7%A6%8F%E5%88%A9/10/1",
            data: {
               
            },
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            header: { 'Accept': 'application/json' }, // 设置请求的 header
            success: function (res) {
                // success
                console.log(res.data.results)
                that.setData({
                    news: res.data.results
                })

            },
            fail: function () {
                // fail
            },
            complete: function () {
                // complete
            }
        })

    },
    onReady: function () {
        // 生命周期函数--监听页面初次渲染完成

    },
    onShow: function () {
        // 生命周期函数--监听页面显示


    },
    onHide: function () {
        // 生命周期函数--监听页面隐藏

    },
    onUnload: function () {
        // 生命周期函数--监听页面卸载

    },
    onPullDownRefresh: function () {
        // 页面相关事件处理函数--监听用户下拉动作
        console.log("===========refresh")
    },
    onReachBottom: function () {
        // 页面上拉触底事件的处理函数
        console.log("===========loadmore")
    },
    onShareAppMessage: function () {
        // 用户点击右上角分享
        return {
            title: 'title', // 分享标题
            desc: 'desc', // 分享描述
            path: 'path' // 分享路径
        }
    }

})