create table `product_info`(
`product_id` varchar(32) not null,
`product_name` varchar(64) not null,
`product_price` decimal(8,2) not null,
`product_stock` int not null,
`product_description` varchar(64),
`product_icon` varchar(512),
`category_type` int not null,
`create_time` timestamp not null default current_timestamp,
`update_time` timestamp not null default current_timestamp on update current_timestamp,
primary key (`product_id`)
) comment 'shopping'


create table `product_category`(
`category_id` int not null auto_increment,
`category_name` varchar(64) not null,
`category_type` int not null,
`create_time` timestamp not null default current_timestamp,
`update_time` timestamp not null default current_timestamp on update current_timestamp,
primary key (`category_id`),
unique key `uqe_category_type`(`category_type`)
)comment 'category'


create table `order_master` (

`order_id` varchar(32) not null,
`buyer_name` varchar(32) not null,
`buyer_phone` varchar(32) not null,
`buyer_address` varchar(128) not null,
`buyer_openid` varchar(64) not null,
`order_amount` decimal(8,2) not null,
`order_status` tinyint(3) not null default '0',
`pay_status` tinyint(3) not null default '0',
`create_time` timestamp not null default current_timestamp,
`update_time` timestamp not null default current_timestamp on update current_timestamp,

primary key (`order_id`),
key `idx_buyer_openid` (`buyer_openid`)
)comment 'order'

create table `order_detail`(
`detail_id` varchar(32) not null,
`order_id` varchar(32) not null,
`product_id` varchar(32) not null,
`product_name` varchar(64) not null,
`product_price` decimal(8,2) not null,
`product_quantity` int not null,
`product_icon` varchar(512),
`create_time` timestamp not null default current_timestamp,
`update_time` timestamp not null default current_timestamp on update current_timestamp,
primary key(`detail_id`),
key `idx_order_id`(`order_id`)
)comment'order detail'

create table `seller_info`(
`seller_id` varchar(32) not null,
`username` varchar(32) not null,
`password` varchar(32) not null,
`openid` varchar(64) not null comment 'openid',
`update_time` timestamp not null default current_timestamp on update current_timestamp,
primary key(`seller_id`)
)comment '卖家信息表';