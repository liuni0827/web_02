$(function(){
    var layer =layui.layer
    var $image =$('#image')
    const options = {
        aspectRatio:1,
        preview:".image-preview"
    }
    $image.cropper(options)

    $("#btnChooseImage").on("click",function(){
        $('#file').click()
    })
    $('#file').on("change",function(e){
        var filelist=e.target.files
        if(filelist.length===0){
            return layer.msg("请选择照片！")

        }
        var file=e.target.files[0]

    })

    $('#btnUpload').on('click',function(){
        var dataURL=$image
        .cropper('getCroppedCanvas',{
            width:100,
            height:100
        })
        
    })
})