$(function(){
    $.getJSON('../json/user.json',function(data){
        data.forEach((v,k)=>{
            $('.widget_body table').append(
            `
            <tr>
                <td>${v.User}</td>
                <td>${v.Group}</td>
                <td>${v.Registered}</td>
                <td><span class="Active">${v.status} </span></td>
                <td>
                    <div class="btn-group">
                        <a href="javascript:;">
                            Action
                            <span></span>
                        </a>
                        <ul>
                            <li><a href="javascript:;"><i class="iconfont icon-xxx"></i>Email</a></li>
                            <li><a href="javascript:;"><i class="iconfont icon-xxx"></i>Edit</a></li>
                            <li><a href="javascript:;"><i class="iconfont icon-xxx"></i>Delete</a></li>
                        </ul>
                    </div>
                </td>
            </tr>

            `
        );
        });
    });
});