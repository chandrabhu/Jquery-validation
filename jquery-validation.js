
//Company Name Validation

var f_filter =  /^[0-9a-zA-Z .]+$/;

if($.trim($('#company_name').val()).length == 0)
{
  error_company_name = 'Corporate Name is required';
  $('#error_company_name').text(error_company_name);
  $('#company_name').addClass('has-error');
}
else
{
  if (!f_filter.test($('#company_name').val())){
    error_company_name = 'Invalid Corporate Name';
    $('#error_company_name').text(error_company_name);
    $('#company_name').addClass('has-error');
  } 
  else{  
    error_company_name = '';
    $('#error_company_name').text(error_company_name);
    $('#company_name').removeClass('has-error');
  }
}

//Name Validation
var f_filter = /^[a-zA-Z ]+$/;

//Mobile Number Validation
var m_filter = /^\d{10}$/;

//Email Validation
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

//PAN Number Validation
var p_filter =  /^([A-Z]{5})(\d{4})([A-Z]{1})$/;

//TAN Number Validation
var t_filter =  /^([A-Z]{4})(\d{5})([A-Z]{1})$/;

//CIN Number Validation
var cin_filter =  /^([A-Z]{1})(\d{5})([A-Z]{2})(\d{4})([A-Z]{3})(\d{6})$/;

//GST Number Validation
var gst_filter =  /^(\d{2})([A-Z]{5})(\d{4})([A-Z]{1})(\d{1})([A-Z]{1})(\d{1})$/;

//Address Validation
var ad_filter =  /^[0-9a-zA-Z ]+$/;

//Pincode Validation
var zip_filter = /^\d{6}$/;

//Account Number
var ac_filter = /^[0-9]+$/;


//IFSC Code Validation
var ifsc_filter = /^([A-Z]{4})(\d{7})$/;

//Submit of Form
if(error_bank_name != ''|| error_branch_name != ''|| error_account_number != ''||
  error_account_type != ''|| error_ifsc_code != '')
{
  return false;
}
else
{
  $("#register_form").submit();
}
});
});


