# -*- coding: utf-8 -*-

{
    'name': "Life cycle hooks",
    'version': '17.0.1.0.0',
    'depends': ['base','web'],
    'author': "",
    'description': """
    Life cycle hooks
    """,
    'data': [
        'views/menu_views.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'odoo_owl_lifecycle_hooks/static/src/js/dashboard.js',
            'odoo_owl_lifecycle_hooks/static/src/xml/dashboard.xml',
        ],
    },
    'installable': True,
    'auto_install': False,
}
