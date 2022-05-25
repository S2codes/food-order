$(document).ready(function () {
     // chechlkout 
     $('.cartAdd').click(function () {
        console.log('add more');
        let id = $(this).attr('data-Id')
        console.log('add id ', id);
        let val = $('#cartQuantityInput'+id).val();
        val = (parseInt(val) + 1)
        $('#cartQuantityNum'+id).text(val)
        $('#cartQuantityInput'+id).val(val)
        let item_price = $('#itemPrice'+id).val();
        $('#totalItemprice'+id).text('₹'+parseInt(item_price)*val);
        $('#totalItemInput'+id).val(parseInt(item_price)*val)
    })
 
    $('.cartSub').click(function () {
       
        let id = $(this).attr('data-Id')
        let val = $('#cartQuantityInput'+id).val();
        val = (parseInt(val) - 1)
        $('#cartQuantityNum'+id).text(val)
        $('#cartQuantityInput'+id).val(val)

        let item_price = $('#itemPrice'+id).val();
        let t_price = $('#totalItemInput'+id).val();
        $('#totalItemInput'+id).val(parseInt(t_price)-parseInt(item_price))
        $('#totalItemprice'+id).text('₹'+(parseInt(t_price)-parseInt(item_price)));

    })

 // add cupon 
 $('#addCuponBtn').click(function () {
    // console.log('add cupon');
    $('#cuponModal').modal('show');
})
$('#addAddress').click(function () {
    // console.log('add cupon');
    $('#addressModal').modal('show');
})




$('#cuponModaform').on('submit', function (e) {
    e.preventDefault();
    console.log('modal clikc');
    // $('#applyCupon').click();
    let cuponcode = $('#cuponInput').val();
    showCupon(cuponcode, 50)
    
})
$('#applyCupon').on('click', function (e) {
    e.preventDefault();
    console.log('modal clikc');
    // $('#applyCupon').click();
    let cuponcode = $('#cuponInput').val();
    showCupon(cuponcode, 50)
    
})

// $('#applyCupon').click(function (e) {
//     e.preventDefault();
//     console.log('apply cupon');
//     let cuponcode = $('#cuponInput').val();
//     if (cuponcode != '') {
//         getCupon(cuponcode, function callback(data) {
//             data = JSON.parse(data)
//             console.log('parse ', data);
//             console.log('stringy ', data.id);
//             let all_totalprice = parseInt($('#totalPrice').val());
//             console.log(all_totalprice);
//             // cuponOff = data.
//             const minAmount = parseInt(data.min_amount)
//             let discount = parseInt(data.discount)
//             console.log(typeof (minAmount));
//             console.log(typeof (all_totalprice));
//             if (data.status == "Available") {
//                 $('#cuponAlert').text('');
//                 if (minAmount <= all_totalprice) {
//                     $('#cuponAlert').text('');
//                     console.log('cupon applicable');
//                     if (data.type == 'f') {
//                         console.log(discount);
//                         showCupon(cuponcode, discount);
//                     }
//                     else if (data.type == 'p') {
//                         discount = (discount / 100);
//                         console.log('pasentage of ', discount);
//                         let dicountPrice = Math.round((all_totalprice * discount));
//                         console.log('total dicount ', all_totalprice);
//                         showCupon(cuponcode, dicountPrice);
//                     }

//                 } else {
//                     $('#cuponAlert').text(`Not Applicable, Minimum Amount ₹${minAmount}`);
//                 }
//             } else {
//                 $('#cuponAlert').text(`No Longer Available`);
//             }


//         })
//     }

// })

function showCupon(cupon, discount) {
    // console.log('cupon ', cupon);
    // console.log('discount ', discount);


    console.log(cupon);
    $('#cuponModal').modal('hide');
    $('#cuponConatiner').html(`  <li class="text-primary">
    Coupon <span class="cupon">(${cupon})</span>
</li>
<li class="text-primary">-₹${discount}</li>`)

    // let totalPrice = $('#totalPrice').val();
    // console.log('grand price ', (totalPrice - discount));
    // let grand_price = (totalPrice - discount);
    // $('#grandPrice_input').val(grand_price);
    // $('#grandPrice').text('₹' + grand_price);


}



})