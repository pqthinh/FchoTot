var flatListData = [
    {   
        "key":"1",
        "name": "Tin đăng đã lưu",
        "icon": 'https://static.chotot.com.vn/storage/admin-centre/buyer_collection_y_shortcut/buyer_collection_y_shortcut_1599536059896.jpg'
    },
    {
        "key":"2",
        "name": "Tìm kiếm đã lưu",
        "icon": 'https://static.chotot.com.vn/storage/admin-centre/buyer_collection_y_shortcut/buyer_collection_y_shortcut_1578389174739.jpg'
    },
    {
        "key":"3",
        "name": "Bạn bè",
        "icon": 'https://st.chotot.com/storage/chotot-icons/png/friends.png'
    },
    {
        "key":"4",
        "name": "Nạp tiền",
        "icon": 'https://static.chotot.com.vn/storage/admin-centre/buyer_collection_y_shortcut/buyer_collection_y_shortcut_1584593600571.jpg'
    },
    {
        "key":"5",
        "name": "Tạo cửa hàng/Chuyển trang",
        "icon": 'https://st.chotot.com/storage/chotot-icons/svg/circle-plus.svg'
    },
    {
        "key":"6",
        "name": "Chợ tốt ưu đãi",
        "icon": 'https://static.chotot.com.vn/storage/admin-centre/buyer_collection_y_shortcut/buyer_collection_y_shortcut_1578628328167.jpg'
    },
    {
        "key":"7",
        "name": "Vòng quay may mắn",
        "icon": 'https://st.chotot.com/storage/chotot-icons/svg/green-wheel.svg'
    },
    {
        "key":"8",
        "name": "Trợ giúp",
        "icon": 'data:image/png;base64,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'
    },
];
module.exports = flatListData;