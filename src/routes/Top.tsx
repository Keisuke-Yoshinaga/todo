import { FC } from 'react';
import { Link } from 'react-router-dom';

const Top: FC = () => {
  return (
    <div className="container mx-auto mt-4">
      <div className="flex flex-wrap">
        <div className="w-full pr-4 sm:w-3/12 lg:w-2/12">
          {/* sidebar */}
          <div className="block overflow-y-auto pb-4 pt-8">
            <div className="mb-6">
              <Link
                className="block px-4 py-2 text-base font-bold uppercase text-slate-700 no-underline hover:text-slate-800"
                to="/"
              >
                TOP
              </Link>
              <ul className="my-0 block list-none flex-wrap pl-0">
                <li>
                  <a
                    className="mx-6 mb-2 block text-sm text-slate-500 no-underline hover:text-slate-800"
                    href="/#react"
                  >
                    React
                  </a>
                </li>
                <li>
                  <a
                    className="mx-6 mb-2 block text-sm text-slate-500 no-underline hover:text-slate-800"
                    href="/#vite"
                  >
                    Vite
                  </a>
                </li>
                <li>
                  <a
                    className="mx-6 mb-2 block text-sm text-slate-500 no-underline hover:text-slate-800"
                    href="/#tailwindcss"
                  >
                    tailwindcss
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <Link
                className="block px-4 py-2 text-base font-bold uppercase text-slate-700 no-underline hover:text-slate-800"
                to="/todo"
              >
                TODO
              </Link>
            </div>
          </div>
        </div>
        {/* main contents */}
        <div className="w-full px-4 sm:w-9/12 sm:pr-10 lg:w-8/12 lg:pr-4">
          <div className="my-8">
            <div className="mt-8">
              <h1 className="mb-2 mt-8 text-4xl font-semibold">技術学習</h1>
              <hr className="mb-8 mt-6 border-b-2 border-slate-200"></hr>
            </div>
            {/* react */}
            <div className="my-4">
              <h2
                id="react"
                className="mb-2 mt-8 text-2xl font-semibold text-slate-700"
              >
                React
              </h2>
              <p className="text-slate-600">
                Reactは、Facebook(Meta)とコミュニティによって開発されているオープンソースのJavaScriptライブラリです。ユーザインターフェースの構築に使用されています。Reactは、モバイルアプリケーションや単一ページアプリケーションの開発にも使用されています。
              </p>
              <div>
                <div className="mb-4">
                  <h3 className="mt-8 text-lg font-semibold text-slate-700">
                    特徴
                  </h3>
                  <p className="text-slate-600"></p>
                </div>
                <ul className="mx-2 list-inside list-disc">
                  <li className="mb-1">
                    宣言的 → ソースコードを直感的に理解しやすい
                  </li>
                  <li className="mb-1">
                    コンポーネント指向 →
                    小さな機能ごとの部品（コンポーネント）を組み合わせてUIを構築するため、再利用性・拡張性が高い
                  </li>
                  <li className="mb-1">
                    仮想DOM →
                    メモリ上に仮想DOMを構築し、変更があった部分のみを再レンダリングすることで処理が高速化
                  </li>
                </ul>
              </div>
              <div>
                <div className="mb-4">
                  <h3 className="mt-8 text-lg font-semibold text-slate-700">
                    Hooks (紹介のものは基本の一部)
                  </h3>
                  <p className="text-slate-600">
                    状態管理などのReactの機能を、クラスを書かずに使えるようになる機能
                  </p>
                </div>
                <ul className="mx-2 list-inside list-disc">
                  <li className="mb-1">useState → 状態を管理するためのHook</li>
                  <li className="mb-1">
                    useEffect →
                    APIなど外部システムに接続・同期するような副作用を管理するためのHook
                  </li>
                  <li className="mb-1">
                    useContext → コンテキストの現在の値を読み取るためのHook
                  </li>
                </ul>
              </div>
              <div>
                <div className="mb-4">
                  <h3 className="mt-8 text-lg font-semibold text-slate-700">
                    状態管理ライブラリ
                  </h3>
                  <p className="text-slate-600">
                    状態管理をデータ専用の領域で保持・管理するためのライブラリ（useStateも単一コンポーネントでの状態管理といえる）
                  </p>
                </div>
                <ul className="mx-2 list-inside list-disc">
                  <li className="mb-1">
                    Redux → もっとも主流 全体を一つの状態として管理
                  </li>
                  <li className="mb-1">
                    Recoil → React公式(Meta)が開発 状態を個別に管理 (今回使用)
                  </li>
                </ul>
              </div>
            </div>
            <hr className="my-12 border-b-2 border-slate-200"></hr>
            {/* vite */}
            <div className="my-4">
              <h2
                id="vite"
                className="mb-2 mt-8 text-2xl font-semibold text-slate-700"
              >
                Vite(ヴィート)
              </h2>
              <p className="text-slate-600">
                Viteは、フロントエンドのJavaScriptバンドルツールの一つ。Vue.jsやReactなどのフレームワークを使用した開発を高速化するために使用される。Viteは、開発時にES
                Modulesを使用してモジュールを配信することで、高速なHMR（Hot
                Module Replacement）を実現しています。
              </p>
              <div>
                <div className="mb-4">
                  <h3 className="mt-8 text-lg font-semibold text-slate-700">
                    開発環境
                  </h3>
                  <p className="text-slate-600"></p>
                </div>
                <ul className="mx-2 list-inside list-disc">
                  <li className="mb-1">
                    Webpack → バンドルツールとしてのデファクトスタンダード
                  </li>
                  <li className="mb-1">
                    Vite → Vue.jsの開発者が開発した新しいバンドルツール
                  </li>
                  <li className="mb-1">
                    Turbopack → webpackの開発者が開発中の新しいバンドルツール
                    β版
                  </li>
                </ul>
              </div>
            </div>
            <hr className="my-12 border-b-2 border-slate-200"></hr>
            {/* tailwindcss */}
            <div className="my-4">
              <h2
                id="tailwindcss"
                className="mb-2 mt-8 text-2xl font-semibold text-slate-700"
              >
                tailwindcss
              </h2>
              <p className="text-slate-600">
                tailwindcssは、CSSフレームワークです。tailwindcssは、CSSのクラスをHTMLに直接記述することで、CSSを記述する手間を省くことができます。
              </p>
              <div>
                <div className="mb-4">
                  <h3 className="mt-8 text-lg font-semibold text-slate-700">
                    メリット
                  </h3>
                  <p className="text-slate-600"></p>
                </div>
                <ul className="mx-2 list-inside list-disc">
                  <li className="mb-1">class名をつける必要がない</li>
                  <li className="mb-1">デザインの変更が容易</li>
                  <li className="mb-1">
                    よりオリジナリティの高いデザイン（Bootstrapのようなフレームワークを使用するより）
                  </li>
                </ul>
              </div>
              <div>
                <div className="mb-4">
                  <h3 className="mt-8 text-lg font-semibold text-slate-700">
                    デメリット
                  </h3>
                  <p className="text-slate-600"></p>
                </div>
                <ul className="mx-2 list-inside list-disc">
                  <li className="mb-1">class名を覚える必要がある</li>
                  <li className="mb-1">コードが長くなり可読性が悪い</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
