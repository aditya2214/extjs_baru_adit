Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',
    storeId:'personnel',
    // autoLoad:true,
    model: 'MyApp.model.Personnel',

    proxy: {
        type: 'jsonp',
        api:{
            read:"http://localhost/extjs_baru_adit/adit/ReadEmployess.php"
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
