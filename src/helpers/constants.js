export const companyName = 'NaNLABS Challenge'

export const imgixFilters = {
    'bri': {
        'name': 'Brightness',
        'type': 'number',
        'min': -100,
        'max': 100,
        'default': 0
    },
    'con': {
        'name': 'Contrast',
        'type': 'number',
        'min': -100,
        'max': 100,
        'default': 0
    },
    'exp': {
        'name': 'Exposure',
        'type': 'number',
        'min': -100,
        'max': 100,
        'default': 0
    },
    'gam': {
        'name': 'Gamma',
        'type': 'number',
        'min': -100,
        'max': 100,
        'default': 0
    },
    'sat': {
        'name': 'Saturation',
        'type': 'number',
        'min': -100,
        'max': 100,
        'default': 0
    },
    'flip': {
        'name': 'Flip',
        'type': 'select',
        'options': ['h', 'v', 'hv'],
        'default': 'h'
    },
    'rot': {
        'name': 'Rotate',
        'type': 'number',
        'min': 0,
        'max': 359,
        'default': 0
    },
    'orient': {
        'name': 'Orientation',
        'type': 'select',
        'options': ['0', '1', '2', '3', '4', '5', '6', '7', '8', '90', '180', '270'],
        'default': '0'
    }
}
