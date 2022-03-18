export const companyName = 'NaNLABS Challenge'

export const imgixFilters = {
    'bri': {
        'name': 'Brightness',
        'values': { 
            'bri': {
                'type': 'range',
                'min': -100,
                'max': 100,
                'value': 0
            }
        }
    },
    'con': {
        'name': 'Contrast',
        'values': {
            'con': {
                'type': 'range',
                'min': -100,
                'max': 100,
                'value': 0
            }
        }
    },
    'gam': {
        'name': 'Gamma',
        'values': {
            'gam': {
                'type': 'range',
                'min': -100,
                'max': 100,
                'value': 1
            }
        }
    },
    'sat': {
        'name': 'Saturation',
        'values': {
            'sat': {
                'type': 'range',
                'min': -100,
                'max': 100,
                'value': 0
            }   
        }
    },
    'exp': {
        'name': 'Exposure',
        'values': {
            'exp': {
                'type': 'range',
                'min': -100,
                'max': 100,
                'value': 0
            }
        }
    },
    'flip': {
        'name': 'Flip',
        'values': {
            'flip': {
                'type': 'select',
                'options': ['h', 'v', 'hv'],
                'value': 'h'
            }
        }
    },
    'rot': {
        'name': 'Rotate',
        'values': {
            'rot': {
                'type': 'range',
                'min': 0,
                'max': 359,
                'value': 0
            }
        }
    },
    'orient': {
        'name': 'Orientation',
        'values': {
            'orient': {
                'type': 'select',
                'options': ['0', '1', '2', '3', '4', '5', '6', '7', '8', '90', '180', '270'],
                'value': '0'
            }
        }
    },
    'usm': {
        'name': 'Unsharp Mask',
        'values': {
            'usm': {
                'type': 'range',
                'min': -100,
                'max': 100,
                'value': 0
            }, 
            'usmrad': {
                'type': 'range',
                'min': 0,
                'max': 500,
                'value': 0
            }
        }
    },
}
