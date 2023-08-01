let num="",st="",resultval=0;
let da="";
let f=0,op="";

function displayEverything(da)
{
    document.getElementById("displayall").value=da;
}

function displayFunc(x)
{
    num=num+x;
    document.getElementById("display").value=num;

    st=st+x;
    da=da+x;
    document.getElementById("AC").colSpan="2";
    document.getElementById("operations").innerHTML="<td id='AC' colspan='2'><input type='button' value='AC' style='font-weight:bold;width:100%;height:100%;font-size: 25px;background-color: rgb(153, 247, 195);color: rgb(255, 54, 4);' id='AC' onclick='AllClear()'></td><td id='C' colspan='2'><input type='button' value='C' style='font-weight:bold;width:100%;height:100%;font-size: 25px;background-color: rgb(153, 247, 195);color: rgb(255, 54, 4);' id='C' onclick='Clear()'></td>";
}

function operatorStore(x)
{
    if(f==0)
    {
        st=st+x;
        da=da+x;
        displayEverything(da);
        f=1;
        num="";
    }
    else
    {
        result();
        da=da+x;
        displayEverything(da);
        st=resultval+x;
        num="";
    }
}

function result() {
    document.getElementById("display").value=eval(st);
    resultval=eval(st);
    document.getElementById("AC").colSpan="4";
    document.getElementById("C").outerHTML="";
}

function resultequal() {
    displayEverything(da);
    document.getElementById("display").value=eval(st);
    st=eval(st);
    da=st;
    f=0;
    document.getElementById("AC").colSpan="4";
    document.getElementById("C").outerHTML="";
}

function AllClear() {
    num="";
    st="";
    resultval=0;
    da="";
    f=0;
    op="";
    document.getElementById("display").value=0;
    document.getElementById("displayall").value="";
    document.getElementById("AC").colSpan="2";
    document.getElementById("operations").innerHTML="<td id='AC' colspan='2'><input type='button' value='AC' style='font-weight:bold;width:100%;height:100%;font-size: 25px;background-color: rgb(153, 247, 195);color: rgb(255, 54, 4);' id='AC' onclick='AllClear()'></td><td id='C' colspan='2'><input type='button' value='C' style='font-weight:bold;width:100%;height:100%;font-size: 25px;background-color: rgb(153, 247, 195);color: rgb(255, 54, 4);' id='C' onclick='Clear()'></td>";
}

function Clear() {
    let l=num.length;
    num=num.slice(0,l-1);
    document.getElementById("display").value=num;
    l=st.length;
    st=st.slice(0,l-1);
    l=da.length;
    da=da.slice(0,l-1);
}