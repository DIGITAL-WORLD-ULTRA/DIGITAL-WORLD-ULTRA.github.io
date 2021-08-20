import pandas as pd
import numpy as np

data = {
    "column": ["RATUL","THE","GREAT"],
    "marks": [100,200,1000],
    "greatness": ["VERY","POOR","WOW"]
}
df = pd.DataFrame(data)
df.index = [1,2,3]
df["column"][1] = "AWESOME"
df.to_csv('first.csv')
ff = pd.read_csv('./first.csv')
print(df)
print('THE SECOND ONE IS')
print(ff)