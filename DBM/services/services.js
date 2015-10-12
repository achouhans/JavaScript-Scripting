//var _getTreeMenuData = $.getJSON('Data/treeData.json');

/*Options:

 hideCheckbox: true, // To Check on the server side to see if there are any children available. If not available set it to true
 unselectable: true,
 active : true,
 selected : true
 lazy : true
 folder: true
 expanded : true
 key
 title*/

// Tree Menu Data
var _getTreeMenuData = [
    {title: "Servers", folder: true, key: "3", refKey: "rootservernode", hideCheckbox: true,
        children: [
            {title: "10.20.121.96", folder: true, key: "3", refKey: "server", hideCheckbox: true,
                children: [
                    {
                        title: "DB - DEV", folder: true, key: "3.1", refKey: "database", hideCheckbox: true,
                        children: [
                            {title: "C_BILLING", key: "3.1.1", refKey: "table"},
                            {title: "C_CONTRACT_HIST", key: "3.1.2", refKey: "table"},
                            {title: "C_VENDOR", key: "3.1.3", refKey: "table"},
                            {title: "C_SUPPLIER", key: "3.1.4", refKey: "table"},
                            {title: "C_RATE", key: "3.1.5", refKey: "table"},
                            {title: "C_CLAUSE", key: "3.1.6", refKey: "table"},
                            {title: "C_CONTRACT", key: "3.1.7", refKey: "table"},
                            {title: "C_RATE_DIM", key: "3.1.8", refKey: "table"},
                            {title: "C_VENDOR_HIST", key: "3.1.9", refKey: "table"},
                            {title: "C_BILLING_HIST", key: "3.1.10", refKey: "table"},
                            {title: "C_CLAUSE_TEMPLATE", key: "3.1.11", refKey: "table"},
                            {title: "METADIRECTORY_FEED", key: "3.1.12", refKey: "table"},
                            {title: "METADIRECTORY_NEW", key: "3.1.13", refKey: "table"}
                        ]
                    },
                    {
                        title: "DB - QA", folder: true, key: "3.2", refKey: "database", hideCheckbox: true,
                        children: [
                            {title: "C_BILLING", key: "3.2.1", refKey: "table"},
                            {title: "C_CONTRACT_HIST", key: "3.2.2", refKey: "table"},
                            {title: "C_VENDOR", key: "3.2.3", refKey: "table"},
                            {title: "C_SUPPLIER", key: "3.2.4", refKey: "table"},
                            {title: "C_RATE", key: "3.2.5", refKey: "table"},
                            {title: "C_CLAUSE", key: "3.2.6", refKey: "table"},
                            {title: "C_CONTRACT", key: "3.2.7", refKey: "table"},
                            {title: "C_RATE_DIM", key: "3.2.8", refKey: "table"},
                            {title: "C_VENDOR_HIST", key: "3.2.9", refKey: "table"},
                            {title: "C_BILLING_HIST", key: "3.2.10", refKey: "table"},
                            {title: "C_CLAUSE_TEMPLATE", key: "3.2.11", refKey: "table"},
                            {title: "METADIRECTORY_FEED", key: "3.2.12", refKey: "table"},
                            {title: "METADIRECTORY_NEW", key: "3.2.13", refKey: "table"}
                        ]
                    },
                    {
                        title: "DB - UAT", folder: true, key: "3.3", refKey: "database", hideCheckbox: true,
                        children: [
                            {title: "C_BILLING", key: "3.3.1", refKey: "table"},
                            {title: "C_CONTRACT_HIST", key: "3.3.2", refKey: "table"},
                            {title: "C_VENDOR", key: "3.3.3", refKey: "table"},
                            {title: "C_SUPPLIER", key: "3.3.4", refKey: "table"},
                            {title: "C_RATE", key: "3.3.5", refKey: "table"},
                            {title: "C_CLAUSE", key: "3.3.6", refKey: "table"},
                            {title: "C_CONTRACT", key: "3.3.7", refKey: "table"},
                            {title: "C_RATE_DIM", key: "3.3.8", refKey: "table"},
                            {title: "C_VENDOR_HIST", key: "3.3.9", refKey: "table"},
                            {title: "C_BILLING_HIST", key: "3.3.10", refKey: "table"},
                            {title: "C_CLAUSE_TEMPLATE", key: "3.3.11", refKey: "table"},
                            {title: "METADIRECTORY_FEED", key: "3.3.12", refKey: "table"},
                            {title: "METADIRECTORY_NEW", key: "3.3.13", refKey: "table"}
                        ]
                    },
                    {
                        title: "DB - PROD", folder: true, key: "3.4", refKey: "database", hideCheckbox: true,
                        children: [
                            {title: "C_BILLING", key: "3.4.1", refKey: "table"},
                            {title: "C_CONTRACT_HIST", key: "3.4.2", refKey: "table"},
                            {title: "C_VENDOR", key: "3.4.3", refKey: "table"},
                            {title: "C_SUPPLIER", key: "3.4.4", refKey: "table"},
                            {title: "C_RATE", key: "3.4.5", refKey: "table"},
                            {title: "C_CLAUSE", key: "3.4.6", refKey: "table"},
                            {title: "C_CONTRACT", key: "3.4.7", refKey: "table"},
                            {title: "C_RATE_DIM", key: "3.4.8", refKey: "table"},
                            {title: "C_VENDOR_HIST", key: "3.4.9", refKey: "table"},
                            {title: "C_BILLING_HIST", key: "3.4.10", refKey: "table"},
                            {title: "C_CLAUSE_TEMPLATE", key: "3.4.11", refKey: "table"},
                            {title: "METADIRECTORY_FEED", key: "3.4.12", refKey: "table"},
                            {title: "METADIRECTORY_NEW", key: "3.4.13", refKey: "table"}
                        ]
                    }
                ]
            },
            {title: "10.20.232.78", folder: true, key: "4", refKey: "server", hideCheckbox: true,
                children: [
                    {
                        title: "DB - UAT", folder: true, key: "4.1", refKey: "database", hideCheckbox: true,
                        children: [
                            {title: "C_BILLING", key: "4.1.1", refKey: "table"},
                            {title: "C_CONTRACT_HIST", key: "4.1.2", refKey: "table"},
                            {title: "C_VENDOR", key: "4.1.3", refKey: "table"},
                            {title: "C_SUPPLIER", key: "4.1.4", refKey: "table"},
                            {title: "C_RATE", key: "4.1.5", refKey: "table"},
                            {title: "C_CLAUSE", key: "4.1.6", refKey: "table"},
                            {title: "C_CONTRACT", key: "4.1.7", refKey: "table"},
                            {title: "C_RATE_DIM", key: "4.1.8", refKey: "table"},
                            {title: "C_VENDOR_HIST", key: "4.1.9", refKey: "table"},
                            {title: "C_BILLING_HIST", key: "4.1.10", refKey: "table"},
                            {title: "C_CLAUSE_TEMPLATE", key: "4.1.11", refKey: "table"},
                            {title: "METADIRECTORY_FEED", key: "4.1.12", refKey: "table"},
                            {title: "METADIRECTORY_NEW", key: "4.1.13", refKey: "table"}
                        ]
                    },
                    {
                        title: "DB - PROD", folder: true, key: "4.2", refKey: "database", hideCheckbox: true,
                        children: [
                            {title: "C_BILLING", key: "4.2.1", refKey: "table"},
                            {title: "C_CONTRACT_HIST", key: "4.2.2", refKey: "table"},
                            {title: "C_VENDOR", key: "4.2.3", refKey: "table"},
                            {title: "C_SUPPLIER", key: "4.2.4", refKey: "table"},
                            {title: "C_RATE", key: "4.2.5", refKey: "table"},
                            {title: "C_CLAUSE", key: "4.2.6", refKey: "table"},
                            {title: "C_CONTRACT", key: "4.2.7", refKey: "table"},
                            {title: "C_RATE_DIM", key: "4.2.8", refKey: "table"},
                            {title: "C_VENDOR_HIST", key: "4.2.9", refKey: "table"},
                            {title: "C_BILLING_HIST", key: "4.2.10", refKey: "table"},
                            {title: "C_CLAUSE_TEMPLATE", key: "4.2.11", refKey: "table"},
                            {title: "METADIRECTORY_FEED", key: "4.2.12", refKey: "table"},
                            {title: "METADIRECTORY_NEW", key: "4.2.13", refKey: "table"}
                        ]
                    }
                ]
            }
        ]
    }
]