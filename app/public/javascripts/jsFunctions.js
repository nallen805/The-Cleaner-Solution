window.onload=function()
{
    $('#showOfficeServices').hide();
    $('#showResidentialServices').hide();
    $('#serviceMsg').hide();
    $('#resServiceMsg').hide();
    $('#hidden').hide();
}

function cleanOffice()
{   
    var cleanOffice = document.getElementById("cleanOffice");
    var officeSelected;

    if(cleanOffice.click)
    {
        officeSelected=true;
        residenceSelected=false;
        $('#showOfficeServices').show();
        document.getElementById('showOfficeServices').scrollIntoView();
    }
}

function cleanResidence()
{
    var cleanResidence = document.getElementById("cleanResidence");
    var residenceSelected;
    if(cleanResidence.click)
    {   
        residenceSelected=true;
        officeSelected=false;
        $('#showResidentialServices').show();   
        document.getElementById('showResidentialServices').scrollIntoView();
    }
}

function displayServiceDetails()
{
    //Display details for service
    let serviceArray = 
        [
            {"serviceName":"Window cleaning", "serviceDetails":"Powerful window cleaning that will leave your window view crystal clear!"},
            {"serviceName":"Office cleaning", "serviceDetails":"We clean your entire office from the bottom floor to the top floor and everything in between!"},
            {"serviceName":"Sweeping \& mopping cleaning", "serviceDetails":"We'll come sweep and mop for those times in between cleaning!"},
            {"serviceName":"Vacuum \& shampoo", "serviceDetails":"We vacuum and shampoo also!"},
            {"serviceName":"Restroom cleaning", "serviceDetails":"Yes, we clean restrooms too!"},
            {"serviceName":"Smoke area \& break room cleaning", "serviceDetails":"We clear your break room and smoke areas of unwanted items, trash, cigarettes, etc.!"},
            {"serviceName":"Basement \& events room cleanup", "serviceDetails":"After a big party or event, who wants to clean up? Call us! We'll do it for you!"},
            {"serviceName":"Carpet \& Rug cleaning \& shampooing", "serviceDetails":"We provide a very detailed cleaning of carpets and rugs."},
            {"serviceName":"Room cleaning", "serviceDetails":"We can come clean one room for you..."},
            {"serviceName":"Residence cleaning", "serviceDetails":"...or we can clean your entire residence for you!"},
            {"serviceName":"Power washing(outside)", "serviceDetails":"We also do power washing for the outside of your house."}
        ];

    var displayServiceMsg = document.getElementById("serviceMsg");
    var radioButtons = document.getElementsByName("selection");
    var thisBtnValue;
    var thisServiceArea;
    var thisServiceArea2;

    for(let i=0; i<radioButtons.length; i++)
    {
        thisBtnValue = radioButtons[i].value;
        if(radioButtons[i].checked)
        {    
            if(thisBtnValue==serviceArray[i].serviceName)
            {   displayServiceMsg.innerHTML=serviceArray[i].serviceDetails; }   
        }  
    }
    $('#serviceMsg').show();
}

function displayResidentialServiceDetails()
{
        //Display details for service
        let serviceArray = 
        [
            {"serviceName":"Window cleaning", "serviceDetails":"Powerful window cleaning that will leave your window view crystal clear!"},
            {"serviceName":"Office cleaning", "serviceDetails":"We clean your entire office from the bottom floor to the top floor and everything in between!"},
            {"serviceName":"Sweeping \& mopping cleaning", "serviceDetails":"We'll come sweep and mop for those times in between cleaning!"},
            {"serviceName":"Vacuum \& shampoo", "serviceDetails":"We vacuum and shampoo also!"},
            {"serviceName":"Restroom cleaning", "serviceDetails":"Yes, we clean restrooms too!"},
            {"serviceName":"Smoke area \& break room cleaning", "serviceDetails":"We clear your break room and smoke areas of unwanted items, trash, cigarettes, etc.!"},
            {"serviceName":"Basement \& events room cleanup", "serviceDetails":"After a big party or event, who wants to clean up? Call us! We'll do it for you!"},
            {"serviceName":"Carpet \& Rug cleaning \& shampooing", "serviceDetails":"We provide a very detailed cleaning of carpets and rugs."},
            {"serviceName":"Room cleaning", "serviceDetails":"We can come clean one room for you..."},
            {"serviceName":"Residence cleaning", "serviceDetails":"...or we can clean your entire residence for you!"},
            {"serviceName":"Power washing(outside)", "serviceDetails":"We also do power washing for the outside of your house."}
        ];

    var displayServiceMsg = document.getElementById("resServiceMsg");
    var radioButtons = document.getElementsByName("resselection");
    var thisBtnValue;

    for(let i=0; i<radioButtons.length; i++)
    {
        thisBtnValue = radioButtons[i].value;
        if(radioButtons[i].checked)
        {    
            if(thisBtnValue==serviceArray[i].serviceName)
            {   displayServiceMsg.innerHTML=serviceArray[i].serviceDetails; } 
        }  
    }
    $('#resServiceMsg').show();
}

function checkInfo()
{
    var thisRadBtnVal;
    var radBtns = document.getElementsByName("radioGroup");
    var addPkgNo = document.getElementById("selectedPkg");
    var addPkgFreq = document.getElementById("selectedFreq");
    var showPkgPrice = document.getElementById("selectedPrice");
    var packFreq;
    var price;
    var packNo;

    for(let i=0; i<radBtns.length; i++)
    {
        thisRadBtnVal = radBtns[i].value.split(",");
        packNo = thisRadBtnVal[0];
        packFreq = thisRadBtnVal[1];
        price = thisRadBtnVal[2];

        if(radBtns[i].checked)
        {

            $('#hidden').show();
            document.getElementById('hidden').scrollIntoView();
            addPkgNo.value=packNo;
            addPkgFreq.value=packFreq;
            showPkgPrice.value=price;
        }
    }
}

//Confirm package has been selected
function submittedStandard()
{
    if(confirm("Are you sure?"))
    {   document.forms.namedItem("standardForm").submit();  }
    else
    {   window.location.assign('/quote');   }
}

// function validatePhone(regPhone)
// {
//     var regPhone=document.getElementById('regPhone').text;
//     console.log(regPhone);
// }