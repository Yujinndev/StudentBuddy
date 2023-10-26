import React from 'react';
import { View } from 'react-native';
import Styles from '../../theme/Styles';

export default function Pagination({ viewCount, currentPage }) {
    const views = [];

    for (let i = 0; i < viewCount; i++) {
        const opacity = currentPage === '1st' ? (i === 0 ? 1.0 : 0.4) : (i === 1 ? 1.0 : 0.4);

        views.push(
            <View
                key={i}
                style={{
                    width: 35,
                    height: 3,
                    borderRadius: 20,
                    backgroundColor: 'white',
                    opacity: opacity,
                }}
            />
        );
    }

    return (
        <View style={Styles.pagination}>
            {views}
        </View>
    );
}
