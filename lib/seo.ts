export const seo = {
  title: '马克孙 | SeletaTech 创始人,开发者',
  description:
    'SeletaTech 创始人，为制造业团队构建 AI 系统。毕业于帝国理工学院物理系。这里记录我对 AI 和创业的思考，偶尔也聊吉他、插画和游戏。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://marksun.net'
      : 'http://localhost:3000'
  ),
} as const
