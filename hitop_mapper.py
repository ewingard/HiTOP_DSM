import pandas as pd
from collections import Counter

# load your excel file
df = pd.read_excel('HiTOP_unique_map.xlsx')

# function to map symptoms to HiTOP hierarchy
def map_symptoms_to_hitop(user_responses):
    hitop_map = {}
    for _, row in df.iterrows():
        symptom_code = row['Symptom Code']
        superspectrum = row['HiTOP Superspectrum']
        spectrum = row['HiTOP Spectrum']
        subfactor = row['HiTOP Subfactor']
        hitop_map[symptom_code] = {
            'superspectrum': superspectrum,
            'spectrum': spectrum,
            'subfactor': subfactor
        }

    user_dimensions = {
        'superspectrum': [],
        'spectrum': [],
        'subfactor': []
    }
    for symptom_code in user_responses:
        if symptom_code in hitop_map:
            user_dimensions['superspectrum'].append(hitop_map[symptom_code]['superspectrum'])
            user_dimensions['spectrum'].append(hitop_map[symptom_code]['spectrum'])
            user_dimensions['subfactor'].append(hitop_map[symptom_code]['subfactor'])

    # count occurrences
    dimension_counts = {key: Counter(values) for key, values in user_dimensions.items()}
    return dimension_counts

# example user responses with symptom codes
user_responses = [1, 3, 4]

# get the HiTOP hierarchy
result = map_symptoms_to_hitop(user_responses)
print(result)
