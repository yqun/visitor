import Vue from 'vue'

// 引入组件
import
{
  Flexbox, FlexboxItem,
  XButton,
  Step, StepItem,
  Flow, FlowState, FlowLine,
  Group,
  Cell,
  Grid, GridItem,
  XInput,
  Datetime,
  XTextarea,
  InlineXNumber,
  Confirm,
  ToastPlugin
}
from 'vux'


//注册组件
Vue.component('flexbox', Flexbox);
Vue.component('flexbox-item', FlexboxItem);
Vue.component('x-button', XButton);
Vue.component('step', Step);
Vue.component('step-item', StepItem);
Vue.component('flow', Flow);
Vue.component('flow-state', FlowState);
Vue.component('flow-line', FlowLine);
Vue.component('group', Group);
Vue.component('cell', Cell);
Vue.component('grid', Grid);
Vue.component('grid-item', GridItem);
Vue.component('x-input', XInput);
Vue.component('datetime', Datetime);
Vue.component('x-textarea', XTextarea);
Vue.component('inline-x-number', InlineXNumber);
Vue.component('confirm', Confirm);


Vue.use(ToastPlugin)
