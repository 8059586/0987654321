AFRAME.registerComponent("move",{
    schema:{
        y:{type:"number",default:1}
    },
    tick:function(){
        window.addEventListener("click",(e)=>{
            this.data.y=this.data.y + 0.005
        })
        var pos = this.el.getAttribute("position")
        pos.y = this.data.y
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
    }
})
AFRAME.registerComponent("zoom",{
    schema:{
        z:{type:"number",default:10}
    },
    tick:function(){
        this.data.z=this.data.z + 0.005
        var pos = this.el.getAttribute("position")
        pos.z = this.data.z
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
    }
})