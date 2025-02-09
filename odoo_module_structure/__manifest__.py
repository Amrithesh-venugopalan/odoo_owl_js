# -*- coding: utf-8 -*-

{
    'name': "Module Structure",
    'version': '17.0.1.0.0',
    'depends': [],
    'author': "",
    'description': """
    Module Structure
    """,
    'data': [
        'security/ir.model.access.csv',
        'views/test_test_views.xml',
        'views/menu_views.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'odoo_module_structure/static/src/js/dashboard.js',
            'odoo_module_structure/static/src/xml/dashboard.xml',
        ],
    },
    'installable': True,
    'auto_install': False,
}
