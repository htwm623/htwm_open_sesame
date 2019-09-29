<template>
  <div>this is a empty map
    <div id="allmap"></div>
  <button @click="clickTest">4575863</button></div>
  
</template>


<script>
export default {
  name: "carParkMap",
  data () {
    return {
      title: 1,
      icon:''
    }
  },

  methods:{
    createMap () {
      var map = new BMap.Map("allmap");  // 
      map.centerAndZoom(new BMap.Point(113.94109155699928,22.5460012535797), 12);
	    map.enableScrollWheelZoom();

      var json_data = [
        {'label':'岗头发展大厦','lng':114.07226253715025,'lat':22.6637522811726,color:'red'},
        {'label':'金荣达工业园','lng':114.06845862743559,'lat':22.669331650353393,color:'green'},
        {'label':'腾讯大厦','lng':113.94109155699928,'lat':22.5460012535797,color:'yello'},
        {'label':'平安大厦','lng':114.11463890661975,'lat':22.567964746208376,color:'blue'},
        {'label':'五和地铁站','lng':114.06762975106045,'lat':22.633706762816656,color:'#0ff'},
      ] 
      var pointArray = new Array();
      
      for (let index = 0; index < json_data.length; index++) {
        let element = json_data[index];
        let marker = new BMap.Marker(new BMap.Point(element.lng, element.lat),{
          icon: new BMap.Symbol(BMap_Symbol_SHAPE_POINT, {
          scale: 1,//图标缩放大小
          fillColor: element.color,//填充颜色
          fillOpacity: 0.8//填充透明度
          })
        });
        map.addOverlay(marker); // 增加点
        marker.setTitle(element.label);  // 添加标签
        pointArray[index] = new BMap.Point(element.lng, element.lat)

        let label = new BMap.Label(element.label,{offset:new BMap.Size(20,-10)});
        let content = element.label
        this.addClickHandler(content,marker)
        // marker.addEventListener('click',this.attribute(content))
      }

	    
    },
    attribute (e,content) {
      let p = e.target;
      console.log(p)
      console.log(content)
    },
    clickTest () {
      
    },
    addClickHandler(content,marker){
		  marker.addEventListener("click",(e) => this.attribute(e,content)
      )},
      
  },
  mounted () {
    this.createMap()
  }
};
</script>

<style scoped>
body, html {width: 100%;height: 100%;margin:0;font-family:"微软雅黑";}
#allmap{width:100%;height:700px;}
p{margin-left:5px; font-size:14px;}
</style>