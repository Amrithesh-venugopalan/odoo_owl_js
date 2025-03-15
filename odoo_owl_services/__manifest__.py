# -*- coding: utf-8 -*-

{
    'name': "Odoo Owl Services",
    'version': '17.0.1.0.0',
    'depends': ['sale_management','base','web'],
    'author': "",
    'description': """
    Module Structure
    """,
    'data': [
        'views/menu_views.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'odoo_owl_services/static/src/js/dashboard.js',
            'odoo_owl_services/static/src/xml/dashboard.xml',
        ],
    },
    'installable': True,
    'auto_install': False,
}
