/**
 * 
 */

$(document).ready(function() {
	$('.delete-book').on('click', function (){
		/*<![CDATA[*/
	    var path = /*[[@{/}]]*/'remove';
	    /*]]>*/
		
		var id=$(this).attr('id');
		
		bootbox.confirm({
			message: "Bạn chắc chắn xoá nội dung này? Hành động này không thể hoàn tác lại!!",
			buttons: {
				cancel: {
					label:'<i class="fa fa-times"></i> Huỷ bỏ'
				},
				confirm: {
					label:'<i class="fa fa-check"></i> Xác nhận'
				}
			},
			callback: function(confirmed) {
				if(confirmed) {
					$.post(path, {'id':id}, function(res) {
						location.reload();
					});
				}
			}
		});
	});
	
	// $('.checkboxBook').click(function () {
   //     var id = $(this).attr('id');
   //     if(this.checked){
   //         bookIdList.push(id);
   //     }
   //     else {
   //         bookIdList.splice(bookIdList.indexOf(id), 1);
   //     }
   // })
	
	$('#deleteSelected').click(function() {
		var idList= $('.checkboxBook');
		var bookIdList=[];
		for (var i = 0; i < idList.length; i++) {
			if(idList[i].checked==true) {
				bookIdList.push(idList[i]['id'])
			}
		}
		
		console.log(bookIdList);
		
		/*<![CDATA[*/
	    var path = /*[[@{/}]]*/'removeList';
	    /*]]>*/
	    
	    bootbox.confirm({
			message: "Bạn chắc chắn xoá nội dung này? Hành động này không thể hoàn tác lại!!",
			buttons: {
				cancel: {
					label:'<i class="fa fa-times"></i> Huỷ bỏ'
				},
				confirm: {
					label:'<i class="fa fa-check"></i> Xác nhận'
				}
			},
			callback: function(confirmed) {
				if(confirmed) {
					$.ajax({
						type: 'POST',
						url: path,
						data: JSON.stringify(bookIdList),
						contentType: "application/json",
						success: function(res) {
							console.log(res); 
							location.reload()
							},
						error: function(res){
							console.log(res); 
							location.reload();
							}
					});
				}
			}
		});
	});
	
	$("#selectAllBooks").click(function() {
		if($(this).prop("checked")==true) {
			$(".checkboxBook").prop("checked",true);
		} else if ($(this).prop("checked")==false) {
			$(".checkboxBook").prop("checked",false);
		}
	})
});