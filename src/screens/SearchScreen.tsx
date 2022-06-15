import React, { useState, useEffect } from 'react'
import { View, Platform, Text, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from '../components/Loading';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { styles as globalStyles } from '../theme/appTheme';
import { SimplePokemon } from '../interfaces/Pokemon.interfaces';

export const SearchScreen = () => {

  const { top } = useSafeAreaInsets();
  const { isFetching, simplePokemonList } = usePokemonSearch();
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon>([])
  const [term, setTerm] = useState('')

  useEffect(() => {
    if(term.length === 0){
      return setPokemonFiltered([]);
    }

    if(isNaN(Number(term))){
      setPokemonFiltered(
        simplePokemonList.filter((poke) => poke.name.toLowerCase().includes(term.toLowerCase()))
      )
    }else{
      setPokemonFiltered(
        [simplePokemonList.find((poke) => poke.id === term)!]
      )
    }


  }, [term])
  

  if(isFetching){
    return <Loading/>
  }

  return (
    <View style={{flex: 1, marginTop: (Platform.OS === 'ios') ? top : top + 10, marginHorizontal: 20}}>
        <SearchInput
        onDebounce={(value) => setTerm(value)}
        />
        <FlatList
        data={pokemonFiltered}
        keyExtractor={(pokemon) => pokemon.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListHeaderComponent={(<Text style={{...globalStyles.title, ...globalStyles.globalMargin, paddingBottom: 10}}>{term}</Text>)}
        renderItem={({item}) => <PokemonCard pokemon={item}/>}
        /> 
    </View>
  )
}
