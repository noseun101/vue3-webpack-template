// path 전역 모듈 사용
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin}  = require('vue-loader')
// const { default: postcss } = require('postcss')
// const loader = require('sass-loader')

// node.js 환경에서 동작함
// export
module.exports = {

  // 배열에 담긴 각각 확장자를 명시하지 않아도 오류 발생하지 않음.
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      // 경로 별칭 사용
      '~': path.resolve(__dirname, 'src'),
      'assets': path.resolve(__dirname, 'src/assets')

    }
  },
 
  // parcel main.js 명시하는 것과 같다.
  // 파일을 읽어들이기 사직하는 진입점 설정
  entry: './src/main.js',

  // 결과물(번들)을 반환하는 설정
  // 기본적으로 dist 폴더 생성 
  output: {
    // 절대적인 경로를 path에 제공
    // 상대적인 경로는 사용할 수 없음.
    // __dirname: 해당 파일 실제 경로를 담당하는 전역 변수
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    clean: true   // 기존에 만들어진 파일을 삭제
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        // .css 파일을 매칭해서 사용함.
        // s?: 있거나 없거나 정규 표현식 사용
        test: /\.s?css$/,
        use: [
          // vue-style-loader가 final 탐색 수행 -> 가장 처음으로 작성함
          'vue-style-loader',
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  
  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정함.
  plugins: [
    // 생성자 함수 선언
    new HtmlPlugin({
      template: './index.html'
    }),

    // static 폴더 내에 아이콘 복사 후 dist에 삽입.
    new CopyPlugin({
      patterns: [
        { from:'static'}
      ]
    }),

    new VueLoaderPlugin({

    })
  ],

  devServer: {
    host: 'localhost'
  }
}