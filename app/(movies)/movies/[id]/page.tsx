type Props = {
    params: { id: string };
};

export default function MovieDetail(props: Props) {
    return <h1>Movie {props.params.id}</h1>;
}
