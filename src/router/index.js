import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import UserInfo from '@/views/UserInfo'
import FormAdd from '@/views/FormAdd'
import Identity from '@/views/Identity'

// 邀请人（学校方）
import BookingFormOne from '@/components/bookingForm/one'
import BookingFormTwo from '@/components/bookingForm/two'
import BookingFormThree from '@/components/bookingForm/three'

import InvitationList from '@/views/booking/Invitation/List'
import InvitationItem from '@/views/booking/Invitation/Item'

import ExamineList from '@/views/booking/examine/List'
import ExamineItem from '@/views/booking/examine/Item'

// 申请人（家长方）
import ApplyFormOne from '@/components/applyForm/one'
import ApplyFormTwo from '@/components/applyForm/two'
import ApplyFormThree from '@/components/applyForm/three'

import MyselfApplyList from '@/views/apply/myselfApply/List'
import MyselfApplyItem from '@/views/apply/myselfApply/Item'

import ReceivedList from '@/views/apply/received/List'
import ReceivedItem from '@/views/apply/received/Item'

Vue.use(Router);

const router = new Router({
  routes: [
    { path: '/', name: 'home', component: Home, meta: {title: '访客管理系统'} },
    { path: '/login', name: 'login', component: Login, meta: {title: '手机号认证'} },
    { path: '/userInfo', name: 'userInfo', component: UserInfo, meta: {title: '用户信息'} },
    { path: '/identity', name: 'Identity', component: Identity, meta: {title: '选择身份'} },

    {
      path: '/formAdd',
      name: 'formAdd',
      component: FormAdd,
      // redirect: { path: '/bookingForm/one', name: 'bookingForm-one', component: One },
      children: [
        // 邀请人（老师）
        { path: '/bookingForm/one', name: 'bookingForm-one', component: BookingFormOne, meta: {title: '填写邀请信息'} },
        { path: '/bookingForm/two', name: 'bookingForm-two', component: BookingFormTwo, meta: {title: '确认邀请信息'} },
        { path: '/bookingForm/three', name: 'bookingForm-three', component: BookingFormThree, meta: {title: '确认邀请'} },
        // 被邀请人（家长）
        { path: '/applyForm/one', name: 'applyForm-one', component: ApplyFormOne, meta: {title: '填写申请信息'} },
        { path: '/applyForm/two', name: 'applyForm-two', component: ApplyFormTwo, meta: {title: '确认申请信息'} },
        { path: '/applyForm/three', name: 'applyForm-three', component: ApplyFormThree, meta: {title: '确认申请'} },
      ]
    },
    // 邀请人（老师）
    { path: '/invitation/list', name: 'invitation-list', component: InvitationList, meta: {title: '我的邀请'} },
    { path: '/invitation/item', name: 'invitation-item', component: InvitationItem, meta: {title: '我的邀请'} },
    { path: '/examine/list', name: 'examine-list', component: ExamineList, meta: {title: '预约审核'} },
    { path: '/examine/item', name: 'examine-item', component: ExamineItem, meta: {title: '预约审核'} },
    // 被邀请人（家长）
    { path: '/myselfApply/list', name: 'myselfApply-list', component: MyselfApplyList, meta: {title: '我的申请'} },
    { path: '/myselfApply/item', name: 'myselfApply-item', component: MyselfApplyItem, meta: {title: '我的申请'} },
    { path: '/received/list', name: 'received-list', component: ReceivedList, meta: {title: '我收到的邀请'} },
    { path: '/received/item', name: 'received-item', component: ReceivedItem, meta: {title: '我收到的邀请'} },
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
