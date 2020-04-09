/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'MyApp.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [{ 
        text: 'id',
        dataIndex: 'id',
        width: 100,
        cell: {
            userCls: 'bold'
        }
    },{ 
        text: 'birthplace',
        dataIndex: 'birthplace',
        width: 100,
        cell: {
            userCls: 'bold'
        }
    },{ 
        text: 'birthday',
        dataIndex: 'birthday',
        width: 100,
        cell: {
            userCls: 'bold'
        }
    }, {
        text: 'created_at',
        dataIndex: 'created_at',
        width: 230 
    }, { 
        text: 'updated_at',
        dataIndex: 'updated_at',
        width: 150 
    }],

    listeners: {
        select: 'onItemSelected'
    }
});
