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
})