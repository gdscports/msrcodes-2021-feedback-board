import firebase from '../firebase';

export enum Collections {
  questions = 'questions',
}

const getConverter = <T>() => ({
  toFirestore: (data: Partial<T>): firebase.firestore.DocumentData => data,
  fromFirestore: (
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions
  ): T => {
    const data = snapshot.data(options)!;
    return data as T;
  },
});

export const getFromFirestore = async <T>(
  fromCollection: Collections,
  defaultData: T[]
): Promise<T[]> => {
  const firestore = firebase.firestore();
  const converter = getConverter<T>();

  // Create a typed collection
  const collection = firestore
    .collection(fromCollection)
    .withConverter(converter);

  // Get results from collection
  const results = await collection.get();

  // Iterate through the documents in results, outputting an array of type T
  const typedResults: T[] = results.docs.map(doc => {
    const data = doc.data();
    return data;
  });

  // If no documents exist in the collection, add some default ones
  if (!typedResults.length) {
    const additions = defaultData.map(
      async data => await collection.doc().set(data)
    );

    await Promise.all(additions);

    // In this event, return default data
    return defaultData;
  }

  return typedResults;
};
