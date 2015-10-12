<body style="cursor: default;">
    
    <div class="navbar-inverse navbar-fixed-top">
      <p class="headerTitle">
        <i class="fa fa-database">  Sqoop Data Ingestion</i>
          <button class="btn sample btn-sample toggleButton" type="button" onclick="">Job View</button>
      </p>
        <hr class="headerHR">
    </div>
    
     <div class="container-fluid" style="
    display: inline-flex;
    width: 100%;
">
        <div class="container" style="
display: inline-flex;width: 100%;"><div class="sidebar" style="
    display: inline-block;
    /* top: 20%; */
">
    <div class="button-container">
        
        
        
        
        <input type="search" placeholder="Search..." autocomplete="off" class="" onkeyup="onTreeSearch(event)" style="
">
        <button type="button" class="btn btn-default" id="resetSearch" onclick="buttonReset(event)">
            <span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>
        </button>
        <button type="button" class="btn btn-default" id="addTreeNode" onclick="addTreeNode(event)">
            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
        </button>
         <button type="button" class="btn btn-default" id="removeTreeNode" onclick="removeTreeNode(event)" disabled="">
            <span class="glyphicon glyphicon-minus" aria-hidden="true"></span>
        </button>
        <button type="button" class="btn btn-default" id="editTreeNode" onclick="editTreeNode(event)" disabled="">
            <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
        </button>
    </div>
    <div id="tree" style="
/* margin-top: 15%; *//* overflow-x: scroll; *//* overflow-y: scroll; */"><ul class="ui-fancytree fancytree-container fancytree-plain" tabindex="0" style="
    /* overflow-x: scroll; */
    /* overflow-y: scroll; */
    /* overflow: auto; */
    /* height: 92%; */
    /* width: 100%; */
"><li class="fancytree-lastsib" style="
    /* overflow: scroll; */
    /* margin: 0; */
    /* overflow-x: auto; */
    /* overflow-y: auto; */
"><span class="fancytree-node fancytree-active fancytree-expanded fancytree-folder fancytree-has-children fancytree-lastsib fancytree-selected fancytree-exp-el fancytree-ico-ef"><span class="fancytree-expander"></span><span class="fancytree-icon"></span><span class="fancytree-title">Servers</span></span><ul style="display: block;"><li class=""><span class="fancytree-node fancytree-expanded fancytree-folder fancytree-has-children fancytree-exp-e fancytree-ico-ef"><span class="fancytree-expander"></span><span class="fancytree-icon"></span><span class="fancytree-title">10.20.121.96</span></span><ul style="display: block;"><li class=""><span class="fancytree-node fancytree-folder fancytree-has-children fancytree-exp-c fancytree-ico-cf"><span class="fancytree-expander"></span><span class="fancytree-icon"></span><span class="fancytree-title">DB - DEV</span></span><ul style="display: none;"><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_BILLING</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_CONTRACT_HIST</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_VENDOR</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_SUPPLIER</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_RATE</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_CLAUSE</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_CONTRACT</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_RATE_DIM</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_VENDOR_HIST</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_BILLING_HIST</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_CLAUSE_TEMPLATE</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">METADIRECTORY_FEED</span></span></li><li class="fancytree-lastsib"><span class="fancytree-node fancytree-lastsib fancytree-exp-nl fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">METADIRECTORY_NEW</span></span></li></ul></li><li class=""><span class="fancytree-node fancytree-folder fancytree-has-children fancytree-exp-c fancytree-ico-cf"><span class="fancytree-expander"></span><span class="fancytree-icon"></span><span class="fancytree-title">DB - QA</span></span><ul style="display: none;"><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_BILLING</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_CONTRACT_HIST</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_VENDOR</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_SUPPLIER</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_RATE</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_CLAUSE</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_CONTRACT</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_RATE_DIM</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_VENDOR_HIST</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_BILLING_HIST</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_CLAUSE_TEMPLATE</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">METADIRECTORY_FEED</span></span></li><li class="fancytree-lastsib"><span class="fancytree-node fancytree-lastsib fancytree-exp-nl fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">METADIRECTORY_NEW</span></span></li></ul></li><li class=""><span class="fancytree-node fancytree-folder fancytree-has-children fancytree-exp-c fancytree-ico-cf"><span class="fancytree-expander"></span><span class="fancytree-icon"></span><span class="fancytree-title">DB - UAT</span></span><ul style="display: none;"><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_BILLING</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_CONTRACT_HIST</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_VENDOR</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_SUPPLIER</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_RATE</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_CLAUSE</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_CONTRACT</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_RATE_DIM</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_VENDOR_HIST</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_BILLING_HIST</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_CLAUSE_TEMPLATE</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">METADIRECTORY_FEED</span></span></li><li class="fancytree-lastsib"><span class="fancytree-node fancytree-lastsib fancytree-exp-nl fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">METADIRECTORY_NEW</span></span></li></ul></li><li class="fancytree-lastsib"><span class="fancytree-node fancytree-folder fancytree-has-children fancytree-lastsib fancytree-exp-cl fancytree-ico-cf"><span class="fancytree-expander"></span><span class="fancytree-icon"></span><span class="fancytree-title">DB - PROD</span></span><ul style="display: none;"><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_BILLING</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_CONTRACT_HIST</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_VENDOR</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_SUPPLIER</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_RATE</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_CLAUSE</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_CONTRACT</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_RATE_DIM</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_VENDOR_HIST</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_BILLING_HIST</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_CLAUSE_TEMPLATE</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">METADIRECTORY_FEED</span></span></li><li class="fancytree-lastsib"><span class="fancytree-node fancytree-lastsib fancytree-exp-nl fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">METADIRECTORY_NEW</span></span></li></ul></li></ul></li><li class="fancytree-lastsib"><span class="fancytree-node fancytree-expanded fancytree-folder fancytree-has-children fancytree-lastsib fancytree-exp-el fancytree-ico-ef"><span class="fancytree-expander"></span><span class="fancytree-icon"></span><span class="fancytree-title">10.20.232.78</span></span><ul style="display: block;"><li class=""><span class="fancytree-node fancytree-expanded fancytree-folder fancytree-has-children fancytree-exp-e fancytree-ico-ef"><span class="fancytree-expander"></span><span class="fancytree-icon"></span><span class="fancytree-title">DB - UAT</span></span><ul style="display: block;"><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_BILLING</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_CONTRACT_HIST</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_VENDOR</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_SUPPLIER</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_RATE</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_CLAUSE</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_CONTRACT</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_RATE_DIM</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_VENDOR_HIST</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_BILLING_HIST</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_CLAUSE_TEMPLATE</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">METADIRECTORY_FEED</span></span></li><li class="fancytree-lastsib"><span class="fancytree-node fancytree-lastsib fancytree-exp-nl fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">METADIRECTORY_NEW</span></span></li></ul></li><li class="fancytree-lastsib"><span class="fancytree-node fancytree-expanded fancytree-folder fancytree-has-children fancytree-lastsib fancytree-exp-el fancytree-ico-ef"><span class="fancytree-expander"></span><span class="fancytree-icon"></span><span class="fancytree-title">DB - PROD</span></span><ul style="display: block;"><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_BILLING</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_CONTRACT_HIST</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_VENDOR</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_SUPPLIER</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_RATE</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_CLAUSE</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_CONTRACT</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_RATE_DIM</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_VENDOR_HIST</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_BILLING_HIST</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">C_CLAUSE_TEMPLATE</span></span></li><li class=""><span class="fancytree-node fancytree-exp-n fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">METADIRECTORY_FEED</span></span></li><li class="fancytree-lastsib"><span class="fancytree-node fancytree-lastsib fancytree-exp-nl fancytree-ico-c"><span class="fancytree-expander"></span><span class="fancytree-checkbox"></span><span class="fancytree-icon"></span><span class="fancytree-title">METADIRECTORY_NEW</span></span></li></ul></li></ul></li></ul></li></ul></div>
<!--
    <div class="button-container1">
        <input type="button" class="btn btn-default" value="Submit" onclick="btnSubmitAll()">
        <input type="button" class="btn btn-default" value="Check All" onclick="btnCheckAll()">
        <input type="button" class="btn btn-default" value="Un-Check All" onclick="btnUnCheckAll()">

    </div>
-->
</div><div class="col-sm-9-2 col-sm-offset-3 col-md-10 col-md-offset-2 main configurationView" style="
    /* margin-left: 55%; */
    width: 100%;
    display: inline-block;
">
    <h1 class="page-header">Configuration View</h1>


    <ul class="nav nav-tabs" onclick="onTabClick(event)">
        <li class="active">
            <a data-toggle="tab" href="#" aria-expanded="false" id="serverTab">Server</a>
        </li>

        <li class="">
            <a data-toggle="tab" href="#" aria-expanded="true" id="generalMenuTab">General</a>
        </li>

        <li class="">
            <a data-toggle="tab" href="#" aria-expanded="false" id="sourceTab">Source</a>
        </li>

        <li class="">
            <a data-toggle="tab" href="#" aria-expanded="false" id="hiveTab">Hive</a>
        </li>

        <li class="">
            <a data-toggle="tab" href="#" aria-expanded="false" id="typeMappingTab">Type Mapping</a>
        </li>

        <li class="">
            <a data-toggle="tab" href="#" aria-expanded="false" id="tableTab">Table</a>
        </li>
    </ul>

    <div class="row tabFooterButtons disabledTabContent" style="
    display: inline-flex;
    top: 70%;
">

        <div class="" style="
    float: left;
    margin-left: 5%;
">
            <input type="button" class="btn btn-default" value="Test" id="test" onclick="test()">
        </div>
        <div class="saveResetDiv" style="
    display: inline-flex;
    width: 10%;
    float: right;
    margin-left: 50%;
">
            <input type="button" class="btn btn-default" value="Save" onclick="save()">
            <input type="button" id="resetFormsButton" class="btn btn-default" value="Reset" onclick="reset()">
        </div>
    </div>
<div class="tab-content disabledTabContent">
    <div class="tab-pane fade active in" id="serverTabContent">
        <br><br>
        <form id="serverTabForm" class="form-horizontal">
            <div class="form-group">
                <label class="col-sm-2 control-label">Host Name:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="hostName" placeholder="Host Name...">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label">PORT:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="port" placeholder="Port Number...">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label">Alias:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="alias" placeholder="Alias...">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label">Username</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="username" placeholder="Username...">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label">Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="password" placeholder="Password...">
                </div>
            </div>
        </form>
    </div>
</div></div></div>
    </div>

    <footer>
        <p class="footerText">Sqoop Data Ingestion Application © 2013 - 2015</p>
    </footer>


<div id="resultLoading" style="width: 100%; height: 100%; position: fixed; z-index: 10000000; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; display: none;"><div style="width: 250px; height: 75px; text-align: center; position: fixed; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; font-size: 16px; z-index: 10; color: rgb(255, 255, 255);"><img src="images/ajax-loader.gif"><div>loading data.. please wait..</div></div><div class="bg" style="opacity: 0.7; width: 100%; position: absolute; top: 0px; height: 100%; background: rgb(0, 0, 0);"></div></div></body>
