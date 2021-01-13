/**
 * jQuery的基本设计思想和主要用法，就是"选择某个网页元素，然后对其进行某种操作"。
 */

$(document).ready(() => {
/**
 * 1. jQuery 如何获取元素
 */
/** 通过 id */
$('#test')
/** 通过 class */
$('.greeting')
/** 通过属性 */
$('input[name=first_name]')
/** 通过复合 CSS 选择器 */
$('#login>input')
/** 通过逗号分隔的选择器列表 */
$('#login>input, #test')
/** 通过JQuery定义的伪选择器 */
$('div:gt(1)') // 获取除前 2 个之外的所有 div 元素

/**
 * 2. jQuery 的链式操作是怎样的
 */
$('#register') // 获取 id 为 register 的元素
  .find('input') // 找出其中的 input 元素
  .eq(1) // 选择第 2 个元素
  .val('张') // 将该元素的 value 设置为 张
  .end() // 退回上一步选择元素，即选择 input 元素后
  .eq(0) // 选择第 1 个元素
  .val('三') // 将该元素的 value 设置为 三

/**
 * 3. jQuery 如何创建元素
 */
// 通过 html string 创建元素
let btn = $('<button type="submit">注册</button>') // 创建了一个 button 元素，此时处于JS引擎线程中，还未添加到页面中
$('#register').append(btn) // 通知浏览器创建 btn 到页面中
$('#login').append('<button type="submit">登录</button>') // 直接通知浏览器创建对应元素
// 通过属性对象创建元素
$("<a/>", {
  html: "This is a <strong>new</strong> link",
  "class": "new",
  href: "foo.html"
}).appendTo($('body'))
// 复制元素
$('a').clone().appendTo('body')
// 删除元素
$('a:eq(0)').remove()
// 删除元素，保留元素相关数据和事件
$('a:eq(0)').detach()
// 清空元素内容
$('#login').empty()

/**
 * 4. jQuery 如何移动元素
 */
$('#test').insertAfter($('#login')) // 移动 id 为 test 的元素到 id 为 login 的元素后面
$('#test').after($('#login')) // id 为 test 的元素的后面是 id 为 login 的元素
// 类似的还有 insertBefore()和before()、appendTo()和append()、prependTo()和prepend()

/**
 * 5. jQuery 如何修改元素的属性
 */
$('#test').attr('style', 'color: red') // 设置某个属性的值
$('#test').attr('style') // 取出某个属性的值

$('#test').html('<br/>') // 设置 html 内容
$('#test').html() // 取出 html 内容

$('#test').text('😁') // 设置 text 内容
$('#test').text() // 取出 text 内容

$('#register>input:eq(1)').val('zhang') // 设置某个表单元素的值
$('#test').val() // 取出某个表单元素的值

$('#test').width('100px') // 设置某个元素的宽度
$('#test').width() // 取出某个元素的宽度

$('#test').height('50px') // 设置某个元素的高度
$('#test').height() // 取出某个元素的高度
})