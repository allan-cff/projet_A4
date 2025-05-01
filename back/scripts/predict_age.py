#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import argparse
import joblib
import numpy as np
import pandas as pd
import os

def main():
    parser = argparse.ArgumentParser(description='Prends en entrée des caractéristiques d\'un arbre et renvoie le cluster de taille d\'arbre associé')
    parser.add_argument('-d', '--diam_tronc', type=str, help='Diametre du tronc', required=True)
    parser.add_argument('-t', '--haut_tot', type=str, help='Hauteur totale de l\'arbre', required=True)
    parser.add_argument('-r', '--haut_tronc', type=str, help='Hauteur du tronc', required=True)

    args = parser.parse_args()

    filename = os.path.dirname(os.path.abspath(__file__))+"models/best_model.pkl"

    best_model = joblib.load(filename)

    new_data = pd.DataFrame(np.array([[float(args.haut_tot),float(args.haut_tronc),float(args.diam_tronc)]]),
                             columns=["haut_tot", "haut_tronc", "tronc_diam"])

    predicted_age = best_model.predict(new_data)

    print(f"{predicted_age[0]}")

if __name__ == "__main__":
    main()
