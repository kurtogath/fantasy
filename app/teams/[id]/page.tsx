export default function Teans({ params }: { params: { id: string } }) {
    const { id } = params;

    return (
        <div>
            <p>Equipo numero {id}</p>
        </div>
    );
}
