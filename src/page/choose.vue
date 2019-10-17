<template>
  <div id="wrap">
    <section id="section">
      <nav id="choose">
        你的选择:
        <!-- <mark>锤子<a href="javascript:;">x</a></mark> -->
        <mark v-for="item,key in choose" @click="delFn(key)">
          {{item}}
          <a href="javascript:;">x</a>
        </mark>
      </nav>
      <ul id="type">
        <li v-for="item,i in dataList">
          {{item.title}}：
          <a v-for="value,j in item.list" href="javascript:;" v-bind:class="{active:item.index===j}"
            @click="showFn(value,i,j,item.title)">
            {{value}}
          </a>
        </li>
      </ul>

    </section>
  </div>
</template>
<script>
  export default {
    name: "choose",
    data() {
      return {
        dataList: '',
        choose: {}
      }
    },
    methods: {
      showFn(val, i, j,title) {
        this.$set(this.choose, i, val)
        this.dataList[i].index = j;
        console.log(val)
        console.log(i)
        console.log(j)
        console.log(title)
      },
      delFn(key) {
        this.$delete(this.choose, key);
        this.dataList[key].index = -1;
      },
      getdata(){
        let filterList = [
          {
              title: '品牌',
              list: ["苹果", "小米", "锤子", "魅族", "华为", "三星", "OPPO", "vivo", "乐视", "360", "中兴", "索尼"]
          },
          {
                title: '尺寸',
                list: ["3.0英寸以下", "3.0-3.9英寸", "4.0-4.5英寸", "4.6-4.9英寸", "5.0-5.5英寸", "6.0英寸以上"]
            },
            {
                title: '系统',
                list: ["安卓", "Android",  "苹果", "IOS",  "微软",  "WindowsPhone", "无", "其他"]
            },
            {
                title: '网络',
                list: ["联通3G", "双卡单4G", "双卡双4G", "联通4G", "电信4G", "移动4G"]
            }
        ]
        this.dataList = filterList
      }
    },
    mounted() {
      this.getdata()
      
    },


  }
</script>

<style scoped>
  body {
    font-size: 14px;
    font-family: "Lantinghei SC Extralight", Arial;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    vertical-align: top;
  }

  #wrap {
    width: 760px;
    height: 260px;
    margin: 100px auto;
    padding: 145px 120px 95px;

  }

  #section {
    width: 760px;
    height: 260px;
    -webkit-box-shadow: 0px 0px 4px rgba(0, 0, 0, .2);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, .2);
  }

  #choose {
    width: 760px;
    height: 50px;
    margin: 0 auto;
    line-height: 50px;
    text-indent: 21px;
  }

  #type {
    width: 100%;
    height: 210px;
    padding: 17px 0 16px 28px;
  }

  #type li {
    height: 44px;
    color: #8a8a8a;
    line-height: 44px;
  }

  #type a {
    margin: 0 12px 0 11px;
    color: #000;
  }

  #choose mark {
    position: relative;
    display: inline-block;
    height: 24px;
    line-height: 24px;
    border: 1px solid #28a5c4;
    color: #28a5c4;
    margin: 12px 5px 0;
    background: none;
    padding: 0 30px 0 6px;
    text-indent: 0;
  }

  #choose mark a {
    position: absolute;
    top: 3px;
    right: 2px;
    display: inline-block;
    width: 18px;
    height: 18px;
    background: #28a5c4;
    color: #fff;
    line-height: 18px;
    font-size: 16px;
    text-align: center;
  }

  .active {
    background: rgb(40, 165, 196);
  }
</style>