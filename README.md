# 超市收银系统 · 在线演示（构建产物）

本仓库只存放**构建后的静态文件**，用于直接访问 GitHub Pages 在线演示：

> **https://bobskay.github.io/supermarket-pos-html/**

## 说明

- 这里的 `assets/`、`products/`、`index.html` 全部由源码仓库构建生成，**请勿直接修改**
- 源码（Vue 3 + Vite + TailwindCSS 4，含模拟数据与自检脚本）在这里：
  **https://github.com/bobskay/supermarket-pos**
- `.nojekyll` 用于让 GitHub Pages 跳过 Jekyll 处理
- 资源使用相对路径引用，因此放在仓库根目录即可正常访问子路径

## 演示账号

| 角色 | 账号 | 密码 |
| --- | --- | --- |
| 店长 | `admin` | `123456` |
| 收银员 | `cashier01` | `123456` |

登录页提供两个一键登录按钮，点击即可进入；右上角可切换**三套皮肤**与**中英文**。

## 如何更新

在源码仓库执行构建，然后把 `dist/` 目录内容覆盖到本仓库并提交：

```bash
cd <源码仓库>
pnpm build
# 将 dist/ 下全部文件复制到本仓库根目录
git add -A && git commit -m "chore: 更新构建产物" && git push
```

> 本仓库是演示用的产物仓库，所有业务逻辑与界面改动都应在源码仓库进行。
