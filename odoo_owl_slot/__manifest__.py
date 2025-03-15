# -*- coding: utf-8 -*-

{
    'name': "Owl Slot",
    'version': '17.0.1.0.0',
    'depends': ['base','web'],
    'author': "",
    'description': """
    Owl Slot
    """,
    'data': [
        'views/menu_views.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'odoo_owl_slot/static/src/js/dashboard.js',
            'odoo_owl_slot/static/src/xml/dashboard.xml',
        ],
    },
    'installable': True,
    'auto_install': False,
}
